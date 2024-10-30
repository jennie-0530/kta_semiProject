import { useEffect, useRef, useState } from 'react';
import { Editor as TinyMCEReactEditor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

type content = {
  defaultValue?: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line
const CustomEditor = ({ defaultValue, content, setContent }: content) => {
  const innerRef = useRef<TinyMCEEditor | null>(null); // TinyMCE 에디터 인스턴스 참조
  const uploadRef = useRef<HTMLInputElement>(null); // 파일 업로드 인풋 참조
  // eslint-disable-next-line
  const [isInit, setIsInit] = useState(false); // 에디터 초기화 상태
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  // 에디터의 내용이 변경될 때 호출되는 함수
  const onChange = (content: string) => {
    setContent(content); // 내용 확인 (여기서 상태 업데이트나 부모 컴포넌트로 전달 가능)
  };
  // 에디터가 초기화된 후 defaultValue가 있을 때만 적용
  useEffect(() => {
    if (innerRef.current && isInit && defaultValue) {
      innerRef.current.setContent(defaultValue); // 에디터에 초기 값 설정
    }
  }, [defaultValue, isInit]);

  return (
    <div className='w-[80%] mx-auto'>
      <label
        htmlFor='category'
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        본문내용
      </label>
      <TinyMCEReactEditor
        textareaName='editor-textarea'
        apiKey='ca91k77cz47t7cpnlgu9v831gbbb5d8fj8535pry43ie9ab9' // TinyMCE API 키 입력
        init={{
          height: 400,
          menubar: true,
          statusbar: false,
          inline_styles: true,
          content_style:
            'body { font-family: Pretendard; } img { max-width: 100%; }',
          language: 'ko_KR', // 한국어 설정
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'searchreplace',
            'visualblocks',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount',
            'code',
          ],
          toolbar:
            'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
          automatic_uploads: true,
          file_picker_callback: async (callback, _value, meta) => {
            if (meta.filetype !== 'image') return; // 이미지 파일만 허용

            const input = uploadRef.current;
            if (!input) return;

            const res = await new Promise<string>((resolve, reject) => {
              setIsLoading(true); // 파일 업로드 시작 -> 로딩 상태 true
              input.click();
              input.onchange = () => {
                if (!input.files) return;
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                  if (e.target?.result && typeof e.target.result === 'string') {
                    resolve(e.target.result); // 이미지 URL 전달
                  }
                };
                reader.readAsDataURL(file); // 파일을 읽어 base64로 변환
                reader.onerror = reject;
              };
            });

            callback(res, { alt: input?.files?.[0].name });
            setIsLoading(false); // 파일 업로드 완료 -> 로딩 상태 false
          },
        }}
        onEditorChange={onChange} // 에디터 내용 변경 시 실행
        onInit={(_, editor) => {
          innerRef.current = editor; // 에디터 인스턴스 저장
          setIsInit(true); // 에디터 초기화 완료
        }}
      />
      <input type='file' ref={uploadRef} style={{ display: 'none' }} />{' '}
      {/* 이미지 업로드용 숨김 인풋 */}
    </div>
  );
};

export default CustomEditor;
