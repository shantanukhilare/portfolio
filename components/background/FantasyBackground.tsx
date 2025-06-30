export function FantasyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="fantasy-background">
        <div className="entire">
          <div className="moon"></div>
          <div className="birds ri-bird"></div>
          <div className="birds ri-bird1"></div>
          <div className="mount"></div>
          <div className="mount mo1"></div>
          <div className="mount mo2"></div>
          <div className="mount mo3"></div>
          <div className="island stone1"></div>
          <div className="island stone2"></div>
          <div className="island stone3"></div>
          <div className="island stone4"></div>

          {/* Castle Buildings */}
          <div className="build">
            <div className="windows"></div>
            <div className="windows Wa"></div>
            <div className="windows Wb"></div>
            <div className="windows Wc"></div>
          </div>
          <div className="roof"></div>
          <div className="chiminy build"></div>

          <div className="tower-style">
            <div className="windows-square">
              <div className="edges"></div>
              <div className="edges eve"></div>
              <div className="edges"></div>
              <div className="edges eve"></div>
            </div>
            <div className="windows-square wm">
              <div className="edges"></div>
              <div className="edges eve"></div>
              <div className="edges"></div>
              <div className="edges eve"></div>
            </div>
          </div>

          <div className="tower-style-side">
            <div className="windows"></div>
            <div className="windows ws1"></div>
          </div>

          <div className="tower-style-roof"></div>
          <div className="tower-style-roof-back"></div>

          <div className="hall">
            <div className="windows-square"></div>
          </div>
          <div className="hall-roof"></div>

          <div className="hall-pillars p1">
            <div className="pillar r1"></div>
          </div>
          <div className="hall-pillars p2">
            <div className="pillar r2"></div>
          </div>
          <div className="hall-pillars p3">
            <div className="pillar r3"></div>
          </div>
          <div className="hall-pillars p4">
            <div className="pillar r4"></div>
          </div>

          <div className="build c3">
            <div className="windows"></div>
            <div className="windows Wa"></div>
            <div className="windows Wb"></div>
            <div className="roof"></div>
            <div className="chiminy build"></div>
          </div>

          <div className="build c4">
            <div className="windows"></div>
            <div className="windows Wa"></div>
            <div className="windows Wb"></div>
            <div className="roof"></div>
            <div className="balcany"></div>
            <div className="roof-pillar"></div>
            <div className="roof-pillar rp1"></div>
            <div className="roof-pillar rp2"></div>
            <div className="roof-pillar rp3"></div>
            <div className="light"></div>
          </div>

          {/* Trees */}
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className={`fig-tree ${i > 0 ? `tr${i}` : ""}`}>
              <div className="branch top"></div>
              <div className="branch m2"></div>
              <div className="branch m3"></div>
              <div className="branch m4"></div>
              <div className="branch m5"></div>
            </div>
          ))}

          <div className="reflect-blur"></div>
        </div>
      </div>
    </div>
  )
}
