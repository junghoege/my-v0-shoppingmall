export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 lg:px-12 py-16">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            채용 안내
          </h1>
          <p className="text-muted-foreground font-mono mb-10">
            ATELIER와 함께 브랜드의 가치를 만들어 갈 패션 MD를 찾습니다.
          </p>

          <div className="space-y-10 text-sm md:text-base font-mono text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                모집 분야
              </h2>
              <p className="mb-1">패션 MD (Merchandiser)</p>
              <p className="text-xs md:text-sm text-muted-foreground/80">
                정규직 · 경력 3년 이상
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                주요 업무
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>시즌별 상품 기획 및 카테고리 운영 전략 수립</li>
                <li>트렌드 및 판매 데이터 분석을 통한 상품 구성 최적화</li>
                <li>생산·디자인·마케팅 팀과의 협업을 통한 컬렉션 완성도 제고</li>
                <li>입·출고 및 재고 관리, 상품 수명주기(Life Cycle) 관리</li>
                <li>온·오프라인 채널별 프로모션/판매 전략 수립</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                자격 요건
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>패션/의류/라이프스타일 브랜드 MD 경력 3년 이상</li>
                <li>데이터 기반의 분석 및 상품 기획 경험이 있으신 분</li>
                <li>트렌드에 대한 높은 관심과 감각을 가지신 분</li>
                <li>내·외부 커뮤니케이션 및 협업 능력이 뛰어나신 분</li>
                <li>엑셀 등 기본 OA 활용이 능숙하신 분</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                우대 사항
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>프리미엄/디자이너 패션 브랜드 경험 보유자</li>
                <li>D2C(자사몰)·온라인 커머스 채널 운영 경험</li>
                <li>영어 또는 제2외국어 가능자</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                근무 조건
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>근무 형태: 정규직 (수습 기간 3개월)</li>
                <li>근무지: 서울시 강남구 ATELIER 본사</li>
                <li>근무 시간: 주 5일 (월–금)</li>
                <li>연봉: 경력 및 역량에 따라 협의</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                지원 방법
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>이메일 지원: recruit@atelier.co.kr</li>
                <li>제출 서류: 이력서, 자기소개서, 포트폴리오(선택)</li>
                <li>파일명 및 메일 제목에 [패션 MD 지원_이름] 형식 기입</li>
              </ul>
              <p className="mt-4 text-xs md:text-sm text-muted-foreground/80">
                서류 전형 합격자에 한하여 개별 연락을 드립니다.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}


