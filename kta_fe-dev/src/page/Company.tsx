const Company = () => {

    return (<div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">회사 소개</h1>

        <div className="flex flex-col items-center">
            {/* 회사 이미지 삽입 */}
            <img
                src="https://i.ytimg.com/vi/oNyJpVvDCN8/maxresdefault.jpg"
                alt="회사 이미지"
                className="w-full max-w-xl mb-6"
            />

            {/* 회사 설명 텍스트 */}
            <p className="text-lg leading-relaxed mb-4">
                저희 회사는 혁신적인 솔루션과 창의적인 아이디어로 세상을 변화시키는 것을 목표로 하는 IT 기업입니다.
                인플루언서 펀딩 플랫폼을 통해 팬들이 인플루언서를 지원하고, 그들이 더 나은 콘텐츠와 이벤트를 만들어낼 수
                있도록 돕고 있습니다.
            </p>

            <p className="text-lg leading-relaxed mb-8">
                저희의 목표는 단순히 서비스를 제공하는 것을 넘어, 사람들과 사람들 사이의 관계를 연결하고,
                그들을 위해 실질적인 가치를 창출하는 것입니다. 팬들이 자신이 좋아하는 인플루언서와 더 가깝게
                소통하고 그들의 활동을 지원할 수 있는 장을 마련함으로써, 새로운 경험과 즐거움을 제공합니다.
            </p>

            {/* 회사의 가치와 목표 */}
            <h2 className="text-2xl font-semibold mb-4">우리의 가치</h2>
            <p className="text-lg leading-relaxed mb-8">
                저희는 항상 혁신, 협업, 책임감을 핵심 가치로 삼아 고객과 파트너에게 최고의 경험을 제공하고자 노력합니다.
                플랫폼의 성장은 곧 저희 팀과 고객 모두의 성장을 의미합니다.
            </p>

            <h2 className="text-2xl font-semibold mb-4">비전</h2>
            <p className="text-lg leading-relaxed mb-8">
                저희 회사는 앞으로도 창의적인 콘텐츠와 혁신적인 플랫폼을 통해 세상과 소통하고, 새로운 기회를 만들어 갈 것입니다.
                고객에게 더 나은 경험을 제공하는 것을 목표로 끊임없이 발전해 나가겠습니다.
            </p>

            {/* 비전 이미지 삽입 */}
            <img
                src="https://media.licdn.com/dms/image/v2/D5612AQEkDTYZVcl3jg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697570293603?e=2147483647&v=beta&t=EvsdA5fB9AOnv1t5XMyix_hb17ROybZ5TD8fNbYbFmw"
                alt="비전 이미지"
                className="w-full max-w-xl"
            />
        </div>
    </div>)
}

export default Company;