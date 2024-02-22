import "./map.css";
import React, { useRef } from 'react'

const Map = () => {
  const modelRef = useRef();

  return (
    <model-viewer
           //className="model-viewer"
          bounds="tight"
          enable-zoom
          src="./k.glb"
          alt="campus_build"
          exposure="0.45"
          camera-controls 
          camera-orbit="220deg 78deg 1m"
          auto-rotate
          shadow-intensity = "1"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ref={(ref) => {
            modelRef.current = ref;
          }}
        >
          <button class="Hotspot" slot="hotspot-3" data-position="123281.12998912594m 24996.030160418082m 215357.7390660429m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>CSE DEPT</h6></div>
    </button><button class="Hotspot" slot="hotspot-5" data-position="62535.22318246665m 31547.935196365972m 213615.31821841744m" data-normal="0m 1m 0m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>KMC</h6></div>
    </button><button class="Hotspot" slot="hotspot-6" data-position="-1677.648165120234m 47053.06128135458m 233322.70539429766m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>CTC/LIBRARY</h6></div>
    </button><button class="Hotspot" slot="hotspot-7" data-position="-74715.38899025513m 20143.066531567118m 89375.74676308458m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>ADMIN BLOCK</h6></div>
    </button><button class="Hotspot" slot="hotspot-8" data-position="-2774.0674231360317m 22761.917624917794m 88327.33669536578m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>MECHANICAL DEPT</h6></div>
    </button><button class="Hotspot" slot="hotspot-9" data-position="55708.44234641294m 22845.166123911713m 93476.90386180909m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>CIVIL DEPT</h6></div>
    </button><button class="Hotspot" slot="hotspot-10" data-position="67265.24793706444m 21896.803160372885m 16605.8527683602m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>AEROSPACE DEPT</h6></div>
    </button><button class="Hotspot" slot="hotspot-11" data-position="-88923.77899283178m 35069.43521593911m 245029.5214725827m" data-normal="0.9612046171561832m 1.0862522132573787e-9m -0.2758363354557106m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>ECE DEPT</h6></div>
    </button><button class="Hotspot" slot="hotspot-12" data-position="-73300.8129921447m 33397.408671385754m 385513.0172395144m" data-normal="0.961204697730181m 0m -0.27583605468000655m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation"><h6>AGRI DEPT</h6></div>
    </button>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
        
        </model-viewer>
  )
}

export default Map