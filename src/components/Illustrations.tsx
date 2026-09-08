import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = 'w-full max-w-lg' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background soft ambient halo circles */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100/70 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Decorative floating icons like in Satner template */}
      <div className="absolute top-2 right-6 animate-bounce duration-1000 hidden sm:block">
        <svg className="w-8 h-8 text-amber-400 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      </div>

      <div className="absolute top-1/4 -left-4 hidden sm:block">
        <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-2 hidden sm:block">
        <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      </div>

      {/* Primary SVG vector artwork resembling the Satner character at analyst desk */}
      <svg
        viewBox="0 0 540 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        {/* Soft background glow disc */}
        <circle cx="270" cy="230" r="190" fill="#F4F5FF" />
        <circle cx="270" cy="230" r="150" fill="#EEF2FF" />

        {/* Floating chart window card (finance/policy analyst) */}
        <g filter="drop-shadow(0 8px 24px rgba(79, 70, 229, 0.12))">
          <rect x="20" y="70" width="160" height="110" rx="12" fill="#FFFFFF" />
          <rect x="20" y="70" width="160" height="28" rx="12" fill="#F8FAFC" />
          <circle cx="36" cy="84" r="4" fill="#EF4444" />
          <circle cx="48" cy="84" r="4" fill="#F59E0B" />
          <circle cx="60" cy="84" r="4" fill="#10B981" />
          <text x="76" y="88" fill="#64748B" fontSize="9" fontWeight="600" fontFamily="sans-serif">NGX BANKING INDEX</text>
          
          {/* Mini mini-chart line */}
          <path d="M35 155 L65 140 L95 148 L125 120 L155 105" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 155 L65 140 L95 148 L125 120 L155 105 L155 165 L35 165 Z" fill="url(#blueGradient)" opacity="0.15" />
          <circle cx="155" cy="105" r="4" fill="#4F46E5" />
        </g>

        {/* Floating policy badge */}
        <g filter="drop-shadow(0 6px 18px rgba(16, 185, 129, 0.15))">
          <rect x="360" y="30" width="150" height="65" rx="10" fill="#FFFFFF" />
          <circle cx="385" cy="62" r="14" fill="#ECFDF5" />
          <path d="M385 54 V70 M378 62 H392" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <text x="408" y="56" fill="#0F172A" fontSize="10" fontWeight="700" fontFamily="sans-serif">POLICY IMPACT</text>
          <text x="408" y="72" fill="#10B981" fontSize="11" fontWeight="800" fontFamily="sans-serif">+18.4% YOY</text>
        </g>

        {/* Chair Backing */}
        <rect x="340" y="160" width="60" height="150" rx="16" fill="#E2E8F0" />
        <rect x="348" y="170" width="44" height="130" rx="12" fill="#CBD5E1" />

        {/* Sitting Analyst Character (Matching Satner vector style) */}
        {/* Torso & Shirt */}
        <path d="M300 240 C300 210 390 210 390 240 L385 340 L285 340 Z" fill="#1E293B" />
        {/* Collar / Tie or modern knit */}
        <path d="M335 230 L345 255 L355 230 Z" fill="#4F46E5" />

        {/* Head and Neck */}
        <rect x="337" y="195" width="16" height="22" rx="4" fill="#D4A373" />
        {/* Face */}
        <path d="M325 155 C325 130 365 130 365 155 C365 185 325 185 325 155 Z" fill="#E0A96D" />
        {/* Stylized Hair (curved swoop like Satner illustration) */}
        <path d="M320 150 C320 120 375 110 375 145 C368 135 345 135 340 145 Z" fill="#1E293B" />
        <path d="M318 140 C325 110 365 105 380 135 C380 155 365 140 355 145 Z" fill="#0F172A" />

        {/* Glasses (Satner character trademark) */}
        <rect x="328" y="152" width="16" height="12" rx="3" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" fillOpacity="0.4" />
        <rect x="348" y="152" width="16" height="12" rx="3" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" fillOpacity="0.4" />
        <path d="M344 157 H348" stroke="#0F172A" strokeWidth="2.5" />
        {/* Eyes & Smile */}
        <circle cx="336" cy="158" r="2.5" fill="#0F172A" />
        <circle cx="356" cy="158" r="2.5" fill="#0F172A" />
        <path d="M340 174 Q346 178 352 174" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

        {/* Right Arm extended to mouse/desk */}
        <path d="M365 245 C380 270 360 305 330 310" stroke="#1E293B" strokeWidth="22" strokeLinecap="round" />
        <circle cx="320" cy="310" r="10" fill="#E0A96D" />

        {/* Desk Table */}
        <rect x="110" y="300" width="320" height="14" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <rect x="110" y="300" width="320" height="14" rx="4" fill="#F8FAFC" />
        {/* Desk legs */}
        <line x1="140" y1="314" x2="140" y2="420" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
        <line x1="400" y1="314" x2="400" y2="420" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />

        {/* Big Professional Monitor on Desk (like Satner) */}
        <rect x="150" y="180" width="150" height="105" rx="8" fill="#334155" />
        <rect x="156" y="186" width="138" height="93" rx="5" fill="#1E293B" />
        {/* Monitor Screen Dashboard Graphics */}
        <rect x="162" y="192" width="60" height="24" rx="3" fill="#4F46E5" fillOpacity="0.4" />
        <rect x="228" y="192" width="60" height="24" rx="3" fill="#10B981" fillOpacity="0.3" />
        {/* Main candlestick / chart lines on monitor */}
        <path d="M165 260 L185 240 L205 250 L230 220 L255 235 L285 205" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="185" y1="230" x2="185" y2="255" stroke="#38BDF8" strokeWidth="1" />
        <line x1="230" y1="210" x2="230" y2="235" stroke="#38BDF8" strokeWidth="1" />
        <line x1="285" y1="195" x2="285" y2="215" stroke="#38BDF8" strokeWidth="1" />

        {/* Monitor Stand */}
        <rect x="218" y="285" width="14" height="20" fill="#64748B" />
        <ellipse cx="225" cy="305" rx="26" ry="6" fill="#475569" />

        {/* Keyboard and Mouse */}
        <rect x="245" y="302" width="55" height="6" rx="2" fill="#94A3B8" />
        <ellipse cx="318" cy="305" rx="7" ry="5" fill="#64748B" />

        {/* Coffee Mug on desk */}
        <rect x="125" y="288" width="12" height="14" rx="2" fill="#4F46E5" />
        <path d="M137 292 C141 292 141 298 137 298" stroke="#4F46E5" strokeWidth="2" fill="none" />
        {/* Steam */}
        <path d="M128 284 Q129 281 128 278" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M132 284 Q133 280 132 277" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

        {/* Gradient Defs */}
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const AboutIllustration: React.FC<{ className?: string }> = ({ className = 'w-full max-w-md' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background soft blob */}
      <div className="absolute inset-0 bg-indigo-50/80 rounded-full blur-2xl transform -translate-x-4 -translate-y-4 -z-10" />

      <svg
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        {/* Soft background shape like in screenshot bottom left */}
        <path
          d="M60 180 C80 100 220 80 320 120 C420 160 450 280 390 350 C330 420 150 420 80 360 C30 320 40 240 60 180 Z"
          fill="#EEF2FF"
          opacity="0.8"
        />

        {/* Green plant in pot on the left floor (just like screenshot bottom left) */}
        <g>
          <path d="M70 380 L80 340 L110 340 L120 380 Z" fill="#10B981" />
          <rect x="75" y="336" width="40" height="6" rx="3" fill="#059669" />
          {/* Lush green foliage leaves */}
          <path d="M95 336 C80 300 60 305 70 285 C80 265 105 295 95 336 Z" fill="#10B981" />
          <path d="M95 336 C105 295 130 290 120 270 C110 250 85 290 95 336 Z" fill="#34D399" />
          <path d="M95 336 C65 315 50 330 55 310 C60 290 85 315 95 336 Z" fill="#059669" />
        </g>

        {/* Stool / Seat (Red/Orange stool like screenshot) */}
        <ellipse cx="170" cy="310" rx="32" ry="10" fill="#EF4444" />
        <rect x="160" y="315" width="20" height="8" rx="2" fill="#DC2626" />
        <line x1="155" y1="320" x2="140" y2="400" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
        <line x1="185" y1="320" x2="200" y2="400" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

        {/* Sitting person legs in dark pants */}
        <path d="M165 285 L180 330 L160 395" stroke="#1E293B" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M185 285 L215 325 L245 335 L260 400" stroke="#0F172A" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />

        {/* Torso in blue shirt (like screenshot) */}
        <path d="M150 215 C150 190 200 185 205 210 L195 295 L145 290 Z" fill="#4F46E5" />

        {/* Arms holding laptop */}
        <path d="M180 215 L215 255 L240 260" stroke="#4F46E5" strokeWidth="14" strokeLinecap="round" />
        <circle cx="242" cy="260" r="7" fill="#E0A96D" />

        {/* Head, Hair & Face */}
        <rect x="168" y="165" width="14" height="18" rx="3" fill="#D4A373" />
        <circle cx="175" cy="145" r="18" fill="#E0A96D" />
        {/* Sleek black hair */}
        <path d="M158 142 C158 120 195 115 195 138 C185 130 170 130 162 142 Z" fill="#0F172A" />
        <circle cx="178" cy="144" r="2.5" fill="#0F172A" />

        {/* Modern minimal desk */}
        <rect x="210" y="270" width="180" height="10" rx="3" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        <line x1="360" y1="280" x2="360" y2="400" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />

        {/* Open Laptop on Desk */}
        <polygon points="230,270 275,270 285,272 225,272" fill="#64748B" />
        <rect x="235" y="225" width="45" height="42" rx="3" fill="#334155" />
        <rect x="238" y="228" width="39" height="34" rx="2" fill="#60A5FA" fillOpacity="0.4" />
        <path d="M242 250 L252 242 L260 248 L270 236" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        {/* Coffee mug with blue accent (like screenshot) */}
        <rect x="300" y="258" width="10" height="12" rx="2" fill="#3B82F6" />
        <path d="M310 261 C313 261 313 266 310 266" stroke="#3B82F6" strokeWidth="1.5" fill="none" />

        {/* Ambient floating ideas/bubbles */}
        <circle cx="280" cy="160" r="6" fill="#818CF8" fillOpacity="0.4" />
        <circle cx="340" cy="190" r="10" fill="#C7D2FE" fillOpacity="0.5" />
        <circle cx="310" cy="120" r="14" fill="#E0E7FF" fillOpacity="0.6" />
      </svg>
    </div>
  );
};
