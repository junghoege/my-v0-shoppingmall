import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="text-2xl font-medium tracking-wide">ATELIER</div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#about" className="hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="#collection" className="hover:text-muted-foreground transition-colors">
              Collection
            </a>
            <a href="#values" className="hover:text-muted-foreground transition-colors">
              Values
            </a>
            <a href="#contact" className="hover:text-muted-foreground transition-colors">
              Contact
            </a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        <img
          src="/elegant-fashion-clothing-display-in-modern-studio.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 text-balance">
            안정호,<br />
            우아함을 입다.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto mb-8 text-pretty">
            시대를 초월한 디자인과 현대적인 감각이 조화를 이루는 프리미엄 패션 브랜드입니다
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">우리의 이야기</h2>
              <p className="text-lg text-muted-foreground font-mono leading-relaxed mb-6">
                2010년 서울에서 시작된 ATELIER는 한국의 전통적인 미학과 현대적인 감각을 결합하여 독창적인 패션을
                선보이는 브랜드입니다.
              </p>
              <p className="text-lg text-muted-foreground font-mono leading-relaxed">
                우리는 지속 가능한 패션을 추구하며, 각 제품에 담긴 장인정신과 예술성으로 고객에게 특별한 경험을
                제공합니다.
              </p>
            </div>
            <div className="relative h-[600px]">
              <img src="/fashion-designer-working-in-elegant-atelier-studio.jpg" alt="Atelier" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center tracking-tight">우리의 가치</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-8xl font-light mb-4">01</div>
              <h3 className="text-2xl font-medium mb-4">장인정신</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                모든 제품은 숙련된 장인의 손길로 정성스럽게 만들어집니다
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-light mb-4">02</div>
              <h3 className="text-2xl font-medium mb-4">지속가능성</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                환경을 생각하는 소재와 생산 방식으로 미래를 만들어갑니다
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-light mb-4">03</div>
              <h3 className="text-2xl font-medium mb-4">혁신</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                전통과 현대의 조화로 새로운 패션을 창조합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="collection" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center tracking-tight">컬렉션</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[500px] group overflow-hidden">
              <img
                src="/elegant-spring-fashion-collection.jpg"
                alt="Spring Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-light text-white mb-2">Spring 2026</h3>
                  <p className="text-white/80 font-mono">새로운 시작을 위한 컬렉션</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] group overflow-hidden">
              <img
                src="/sophisticated-winter-fashion-collection.jpg"
                alt="Winter Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-light text-white mb-2">Winter 2025</h3>
                  <p className="text-white/80 font-mono">따뜻함과 우아함의 조화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">당신의 스타일을 발견하세요</h2>
          <p className="text-lg font-mono mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            ATELIER의 최신 컬렉션을 만나보세요
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6">
            컬렉션 둘러보기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-medium mb-4">ATELIER</div>
              <p className="text-sm text-muted-foreground font-mono">프리미엄 패션 브랜드</p>
            </div>
            <div>
              <h4 className="font-medium mb-4 font-mono">회사</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    소개
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-foreground transition-colors">
                    채용
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    매장 안내
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 font-mono">고객 지원</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    고객센터
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    배송 안내
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    반품/교환
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 font-mono">연락처</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li>서울시 강남구</li>
                <li>02-1234-5678</li>
                <li>info@atelier.co.kr</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground font-mono">
            © 2026 ATELIER. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
