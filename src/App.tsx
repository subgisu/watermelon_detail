/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Sun, 
  Maximize, 
  ThermometerSnowflake, 
  Box, 
  Clock,
  CheckCircle2,
  Leaf,
  Utensils,
  Package,
  Heart,
  Activity
} from 'lucide-react';
import { ReactNode, Key } from 'react';

// Reusable FadeIn Component for scroll animations
const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string, key?: Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-100 py-0 sm:py-10">
      {/* Main Container - Constrained width to mimic commerce detail pages (e.g., 720px - 860px) */}
      <main className="max-w-[760px] mx-auto bg-white shadow-2xl overflow-hidden text-zinc-900 font-sans relative">
        
        {/* ==========================================
            PAGE 1: Hero Section (Redesigned)
        ========================================== */}
        <section className="relative bg-white pt-0 pb-24 overflow-hidden text-center">
          {/* Top Background (Farm) */}
          <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
            <img 
              src="/watermelon_detail/Watermelon.png" 
              alt="수박 농장 배경" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
            
            {/* Huge Text */}
            <div className="absolute top-12 sm:top-20 left-0 w-full text-center z-10 flex flex-col items-center">
              <FadeIn>
                <p className="text-xl sm:text-2xl font-medium text-white/90 mb-4 drop-shadow-md tracking-wide">
                  "맑은 달콤함, 한입에 퍼지다"
                </p>
                <img 
                  src="/watermelon_detail/topcopy.png" 
                  alt="제철을 담아낸 진한 단맛" 
                  className="h-auto w-auto max-w-[90%] max-h-[120px] sm:max-h-[160px] object-contain drop-shadow-lg mx-auto"
                />
              </FadeIn>
            </div>
          </div>

          {/* Overlapping Product Image */}
          <div className="relative z-20 -mt-32 sm:-mt-48 flex justify-center px-4">
            <FadeIn delay={0.2}>
              <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]">
                {/* Circular crop with thick white border to simulate pop-out effect */}
                <img 
                  src="/watermelon_detail/Watermelonslice1.webp" 
                  alt="프리미엄 수박" 
                  className="w-full h-full object-cover rounded-full border-[10px] sm:border-[16px] border-white shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="relative z-30 mt-12 px-8">
            <FadeIn delay={0.3}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-red-600 bg-red-50 rounded-full border border-red-100">
                PREMIUM WATERMELON
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 tracking-tight text-zinc-900">
                자연이 빚은 명품 수박
              </h2>
              <div className="w-12 h-1 bg-red-500 mx-auto mb-8"></div>
              <p className="text-lg text-zinc-700 font-medium mb-4">
                청정 산지에서 온 프리미엄 클린 테이스트
              </p>
              <p className="text-zinc-500 leading-relaxed max-w-md mx-auto break-keep">
                청정 고랭지에서 재배해 잔류농약 걱정 없이 즐기는 프리미엄 수박입니다. 한 통의 수박이 식탁에 오르기까지, 90일의 정성이 담깁니다.
              </p>
            </FadeIn>
          </div>

          {/* Farmer Image */}
          <div className="relative z-30 mt-16 px-4 sm:px-8">
            <FadeIn delay={0.4}>
              <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/watermelon_detail/woman-farmer.jpg" 
                  alt="채움농장 농부" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                  <div className="mb-6">
                    <p className="text-white text-xl sm:text-2xl font-bold mb-1">
                      "정직한 땀방울로 키워냅니다"
                    </p>
                    <p className="text-white/80 text-sm sm:text-base">
                      채움농장 대표 농부
                    </p>
                  </div>
                  
                  {/* Additional Text Box */}
                  <div className="bg-white/90 backdrop-blur-md p-5 rounded-xl max-w-lg border border-white/20 shadow-lg">
                    <p className="text-zinc-800 text-sm sm:text-base leading-relaxed break-keep font-medium">
                      "좋은 수박은 건강한 땅에서 시작됩니다. 채움농장은 수박의 단맛을 극대화하기 위해 직접 배합한 유기질 비료만을 고집합니다."
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ==========================================
            PAGE 2: Features Section
        ========================================== */}
        <section className="py-12 px-8 bg-white">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tighter text-zinc-900 leading-[1.1]">
                맛과 안전,<br />두 마리 토끼를 잡다
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {/* Card 1: High Sugar Content (Full Width Horizontal) */}
            <FadeIn delay={0.1} className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-100 shadow-sm hover:border-red-100 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-800">압도적인 고당도</h3>
              </div>
              <p className="text-zinc-500 mb-6 break-keep text-lg max-w-3xl">일반 수박을 뛰어넘는 12 Brix 이상의 프리미엄 당도를 자랑합니다. 한 입 베어 무는 순간 입안 가득 퍼지는 진한 달콤함을 경험해보세요.</p>
              
              {/* Comparison Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Block 1: 일반 수박 */}
                <div className="bg-zinc-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-56 relative overflow-hidden border border-zinc-100">
                  <span className="text-zinc-500 font-bold text-xl mb-3 relative z-10">일반 수박</span>
                  <span className="text-4xl sm:text-5xl font-black text-zinc-300 relative z-10 tracking-tighter">9~10 Brix</span>
                </div>

                {/* Block 2: 채움농장 (Styled like attachment) */}
                <div className="bg-[#F5D76E] rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-56 shadow-sm border border-[#E5C75E]">
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[#F04445] font-black text-2xl sm:text-3xl mb-2 tracking-tight">당도선별</span>
                    <span className="text-5xl sm:text-6xl font-black text-[#F04445] tracking-tighter drop-shadow-sm">12Brix 보장</span>
                  </div>
                  {/* Decorative elements mimicking the attachment's playful vibe */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E5C75E] rounded-tl-full opacity-50"></div>
                  <div className="absolute top-6 left-6 w-10 h-10 bg-[#F04445] rounded-full opacity-20"></div>
                  <div className="absolute bottom-8 left-12 w-4 h-4 bg-[#F04445] rounded-full opacity-30"></div>
                  <div className="absolute -bottom-6 -right-2 text-8xl opacity-20 rotate-[-15deg] select-none">🍉</div>
                </div>
              </div>
            </FadeIn>

            {/* Cards 2, 3 in a 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 2: Fresh Delivery */}
              <FadeIn delay={0.2} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-red-100 transition-colors flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-red-500 shrink-0">
                    <Truck size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">산지 직송 프로세스</h3>
                </div>
                <p className="text-zinc-500 mb-8 break-keep flex-1">수확부터 배송까지, 가장 신선한 상태로 식탁에 오릅니다.</p>
                
                {/* Timeline */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 mt-auto">
                  <div className="flex flex-col gap-6 relative">
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-zinc-100"></div>
                    
                    <div className="flex items-center gap-5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center shrink-0 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-sm font-bold text-red-500 w-20">AM 06:00</span>
                        <span className="text-sm text-zinc-700 font-medium">산지 수확</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center shrink-0 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-sm font-bold text-red-500 w-20">AM 11:00</span>
                        <span className="text-sm text-zinc-700 font-medium">당도 선별 및 패킹</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center shrink-0 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="text-sm font-bold text-red-500 w-20">PM 02:00</span>
                        <span className="text-sm text-zinc-700 font-medium">산지 직송 출발</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Card 3: Premium Quality */}
              <FadeIn delay={0.3} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-red-100 transition-colors flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-red-500 shrink-0">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800">엄격한 품질 보증</h3>
                </div>
                <p className="text-zinc-500 mb-8 break-keep flex-1">비파괴 당도 선별기로 하나하나 꼼꼼하게 검사합니다.</p>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-zinc-100 flex items-center gap-5 mt-auto">
                  <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-zinc-100 relative shadow-inner hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=400&auto=format&fit=crop" alt="당도 검사" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-md mb-2 w-fit border border-red-100">
                      <CheckCircle2 size={14} />
                      <span>100% 당도 보장제</span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed break-keep">전문가의 깐깐한 기준으로 선별된 최상급 수박만 보내드립니다.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn delay={0.4} className="mt-10 text-center">
            <p className="text-zinc-400 text-sm">각 요소를 엄격하게 관리하여 최상의 품질만을 전달합니다.</p>
          </FadeIn>
        </section>

        {/* ==========================================
            PAGE 3: Hydration Section
        ========================================== */}
        <section className="py-24 px-8 bg-cyan-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 text-cyan-100 opacity-50">
            <Droplet size={400} strokeWidth={0.5} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <FadeIn>
              <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-8">
                <Droplet size={36} />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold mb-4 text-cyan-950 tracking-tight">
                94% 수분, 여름을 적시다
              </h2>
              <p className="text-xl text-cyan-700 mb-12">
                자연이 채운 시원한 수분감
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="w-full relative rounded-3xl overflow-hidden shadow-xl mb-12 aspect-video">
              <img 
                src="/watermelon_detail/watermelon-splashing.jpg" 
                alt="물방울과 청량감" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-cyan-900 leading-relaxed max-w-lg mx-auto break-keep">
                고른 결실과 높은 수분 함량으로 한입에 청량함이 퍼집니다.<br/>
                야외 활동 후 갈증 해소용으로 제격입니다.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ==========================================
            PAGE 4: Color & Visual Section (Green Theme)
        ========================================== */}
        <section className="pt-32 bg-emerald-950 text-white text-center flex flex-col">
          <div className="px-8 mb-16">
            <FadeIn>
              <Sun className="mx-auto text-red-400 mb-6" size={40} strokeWidth={1.5} />
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
                선명한 붉은빛,<br />과육의 광채
              </h2>
              <p className="text-xl text-emerald-200/80 mb-8">
                안팎으로 돋보이는 컬러와 윤기
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-emerald-50/90 leading-relaxed max-w-2xl mx-auto break-keep">
                꼼꼼한 재배 관리로 껍질부터 과육까지 선명한 색을 구현했습니다.<br/>
                시각적 만족감이 식탁의 품격을 높여줍니다.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="relative w-full mt-auto overflow-hidden">
            <img 
              src="/watermelon_detail/watermelon%20field.png" 
              alt="수박밭" 
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
            
            {/* Smoky / Torn Edge Effect */}
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <filter id="smoke-edge" x="-10%" y="-30%" width="120%" height="160%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="5" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
            </svg>
            
            {/* Smoke Layers */}
            <div 
              className="absolute -bottom-10 left-[-5%] w-[110%] h-40 bg-white/60 z-10 pointer-events-none" 
              style={{ filter: 'url(#smoke-edge)' }}
            ></div>
            <div 
              className="absolute -bottom-20 left-[-5%] w-[110%] h-48 bg-white z-20 pointer-events-none" 
              style={{ filter: 'url(#smoke-edge)' }}
            ></div>
          </FadeIn>
        </section>

        {/* ==========================================
            PAGE 5: Texture Section
        ========================================== */}
        <section className="pt-8 pb-24 px-8 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-4 tracking-tight text-zinc-900">
                  아삭아삭,<br />식감까지 완벽
                </h2>
                <p className="text-xl text-red-600 mb-8">
                  섬세한 조직이 주는 경쾌한 한입
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed break-keep mb-8">
                  낮과 밤 큰 일교차가 셀룰로오스를 촘촘히 형성해 과육이 무르지 않고 아삭한 식감을 유지합니다.
                </p>
                
                {/* Infographic Elements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-700">
                      <ThermometerSnowflake size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-800">큰 일교차 재배</p>
                      <p className="text-sm text-zinc-500">조직을 단단하게 만드는 자연의 힘</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-700">
                      <Maximize size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-800">촘촘한 셀룰로오스</p>
                      <p className="text-sm text-zinc-500">무르지 않는 경쾌한 텍스처</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.2} className="flex-1 w-full">
              <img 
                src="/watermelon_detail/watermelon-table.jpg" 
                alt="아삭한 수박 조각" 
                className="w-full rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </section>

        {/* ==========================================
            PAGE 6: Tips Section
        ========================================== */}
        <section className="relative py-24 px-8 bg-zinc-50">
          {/* Arch Shape Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[80px]">
              <path d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" className="fill-zinc-50" />
            </svg>
          </div>

          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-zinc-900">
              신선함을 오래 즐기는 세 가지 팁
            </h2>
            <p className="text-lg text-zinc-500 uppercase tracking-widest">
              Easy 3 Step Guide
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
            {/* Left: Image */}
            <FadeIn delay={0.3} className="w-full md:w-1/2 lg:w-[55%] flex justify-center md:justify-end">
              <img 
                src="/watermelon_detail/Watermelonslice1.png" 
                alt="수박 조각" 
                className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[800px] object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </FadeIn>

            {/* Right: Timeline */}
            <div className="w-full md:w-1/2 lg:w-[45%] relative pl-0 md:pl-8">
              {/* Vertical Line */}
              <div className="absolute left-[39px] md:left-[71px] top-4 bottom-4 w-0.5 bg-zinc-200"></div>

              <div className="space-y-12 relative z-10">
                {[
                  { icon: ThermometerSnowflake, title: "Step 1", desc: "서늘한 곳 예비 숙성 후 냉장 보관하세요." },
                  { icon: Box, title: "Step 2", desc: "4–6등분으로 커팅하여 밀폐 용기에 보관하세요." },
                  { icon: Utensils, title: "Step 3", desc: "차갑게 식힌 뒤 바로 서빙하여 즐기세요." }
                ].map((step, idx) => (
                  <FadeIn key={idx} delay={idx * 0.15} className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md border-4 border-zinc-50 flex items-center justify-center shrink-0 text-red-500 relative z-10">
                      <step.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-bold text-zinc-800 mb-2">{step.title}</h3>
                      <p className="text-zinc-600 break-keep">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            PAGE 7: Health Benefits Section
        ========================================== */}
        <section className="py-24 px-8 bg-white border-t border-zinc-100">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter text-zinc-900">
                수박이 우리 몸에 좋은 이유
              </h2>
              <p className="text-xl sm:text-2xl text-zinc-500 font-medium">
                맛있게 즐기며 챙기는 건강한 이점들
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <FadeIn delay={0.2} className="bg-red-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                  <Droplet size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900">탁월한 수분 보충</h3>
                <p className="text-zinc-600 break-keep">
                  92%의 풍부한 수분으로 여름철 갈증을 빠르게 해소합니다.
                </p>
              </FadeIn>

              {/* Benefit 2 */}
              <FadeIn delay={0.4} className="bg-emerald-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900">풍부한 라이코펜</h3>
                <p className="text-zinc-600 break-keep">
                  토마토보다 풍부한 라이코펜이 항산화 및 심혈관 건강을 돕습니다.
                </p>
              </FadeIn>

              {/* Benefit 3 */}
              <FadeIn delay={0.6} className="bg-orange-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                  <Activity size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900">근육통 완화</h3>
                <p className="text-zinc-600 break-keep">
                  시트룰린 성분이 혈관을 이완시켜 운동 후 근육통을 완화해 줍니다.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ==========================================
            BONUS: Risk Mitigation & Trust Footer
        ========================================== */}
        <section className="py-16 px-8 bg-zinc-900 text-zinc-400 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <Package className="text-zinc-300 mb-4" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-bold mb-2 text-base">안전 완충 포장</h4>
                <p className="break-keep">파손과 온도 변화에 민감한 수박을 위해 전용 에어캡과 아이스팩을 동봉하여 안전하게 배송합니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <Clock className="text-zinc-300 mb-4" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-bold mb-2 text-base">시즌 한정 산지 직송</h4>
                <p className="break-keep">가장 당도가 높은 제철 시즌에만 한정 수량으로 수확하여 산지에서 고객님께 바로 보내드립니다.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <Leaf className="text-zinc-300 mb-4" size={32} strokeWidth={1.5} />
                <h4 className="text-white font-bold mb-2 text-base">채움농장의 철학</h4>
                <p className="break-keep">30년 노하우의 재배 방식으로 땅의 영양을 온전히 담아냅니다. 자연이 허락한 최고의 맛을 약속합니다.</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="pt-8 border-t border-zinc-800 text-center flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-zinc-500">
              <CheckCircle2 size={16} />
              <span>품질 보증 100% 안심 환불제 운영</span>
            </div>
            <p className="text-xs text-zinc-600 mt-4">
              © 2026 채움농장. All rights reserved.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
