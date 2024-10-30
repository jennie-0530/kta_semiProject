const Terms = () => {

    return (<div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">이용약관</h1>

        <h2 className="text-2xl font-semibold mt-6">제 1 조 (목적)</h2>
        <p className="mt-4">
            본 약관은 인플루언서 펀딩 플랫폼(이하 "플랫폼")을 이용함에 있어
            플랫폼과 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
        </p>

        <h2 className="text-2xl font-semibold mt-6">제 2 조 (정의)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>
                <strong>플랫폼</strong>: 인플루언서 펀딩 서비스를 제공하는 온라인
                웹사이트 및 관련 서비스를 말합니다.
            </li>
            <li>
                <strong>회원</strong>: 플랫폼에 가입하여 본 약관에 따라 플랫폼을
                이용하는 자를 말합니다.
            </li>
            <li>
                <strong>펀딩</strong>: 회원이 인플루언서가 제안한 프로젝트에 금전적으로
                후원하는 행위를 말합니다.
            </li>
            <li>
                <strong>프로젝트</strong>: 인플루언서가 플랫폼을 통해 팬들에게 제안하는
                후원 목적의 이벤트나 상품을 말합니다.
            </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 3 조 (약관의 게시와 개정)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>
                본 약관은 플랫폼의 초기 화면에 게시하여 회원이 확인할 수 있도록 합니다.
            </li>
            <li>
                플랫폼은 관련 법령의 변경이나 운영 정책의 변화에 따라 약관을 개정할 수 있으며,
                개정된 약관은 게시일로부터 7일 후에 효력이 발생합니다. 단, 회원에게 불리한 변경
                사항은 최소 30일 전에 공지합니다.
            </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 4 조 (회원가입)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>회원가입은 무료이며, 회원은 실명과 정확한 정보를 제공해야 합니다.</li>
            <li>플랫폼은 회원의 가입 신청을 승인하거나 거부할 권리를 가집니다.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 5 조 (회원 탈퇴 및 자격 상실)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>
                회원은 언제든지 플랫폼을 통해 탈퇴할 수 있으며, 탈퇴 후 회원의 정보는 플랫폼에서
                삭제됩니다.
            </li>
            <li>
                회원이 다음 각 호에 해당하는 경우, 플랫폼은 회원 자격을 제한하거나 상실시킬 수
                있습니다:
                <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>가입 시 허위 정보를 기재한 경우</li>
                    <li>플랫폼의 운영을 방해한 경우</li>
                    <li>본 약관을 위반한 경우</li>
                </ul>
            </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 6 조 (서비스 제공 및 변경)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>플랫폼은 다음과 같은 서비스를 제공합니다:</li>
            <ul className="list-disc ml-8 mt-2 space-y-1">
                <li>프로젝트 등록 및 관리 서비스</li>
                <li>팬 및 구독자의 펀딩 참여 서비스</li>
                <li>펀딩 결과에 따른 리워드 제공 서비스</li>
            </ul>
            <li>
                플랫폼은 운영 상 필요에 따라 제공되는 서비스를 변경하거나 중단할 수 있으며,
                이를 사전에 회원에게 공지합니다.
            </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 7 조 (펀딩)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>회원은 플랫폼을 통해 프로젝트에 펀딩을 할 수 있습니다.</li>
            <li>펀딩 금액은 회원이 자율적으로 결정하며, 후원한 금액은 프로젝트 성공 시에만 인플루언서에게 지급됩니다.</li>
            <li>프로젝트가 실패할 경우, 펀딩 금액은 회원에게 환불됩니다.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 8 조 (책임의 제한)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>
                플랫폼은 프로젝트 성공 여부에 대해 보증하지 않으며, 인플루언서가 제공하는 정보에 대한 책임을 지지 않습니다.
            </li>
            <li>플랫폼은 회원 간의 분쟁에 대해 책임지지 않으며, 모든 분쟁은 당사자 간 해결해야 합니다.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 9 조 (개인정보 보호)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>
                플랫폼은 회원의 개인정보 보호를 위해 관련 법령을 준수하며, 회원의 동의 없이 제3자에게 개인정보를 제공하지 않습니다.
            </li>
            <li>
                회원은 언제든지 자신의 개인정보를 열람하거나 수정할 수 있으며, 플랫폼은 회원의 요청에 따라 개인정보를 삭제할 의무가 있습니다.
            </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">제 10 조 (분쟁 해결)</h2>
        <ol className="list-decimal ml-6 mt-4 space-y-2">
            <li>
                본 약관에 명시되지 않은 사항이나 회원 간의 분쟁에 대해서는 대한민국 법령에 따릅니다.
            </li>
            <li>분쟁 발생 시 관할 법원은 플랫폼의 본사 소재지 관할 법원으로 합니다.</li>
        </ol>
    </div>)
}

export default Terms