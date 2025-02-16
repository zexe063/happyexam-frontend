

function ArrowSVG({color, bgColor}){

   

    return(
        <div className=" absolute  top-[30%] left-[-14px]  transition-all duration-100 ease-in-out">
            
            <svg width="20" height='20' viewBox="0 0 17 35"   focusable="false" class="chakra-icon speech-bubble-tail css-onkibi"><path d="M17.0121 0.890625L4.74655 12.941C3.2299 14.3967 2.47157 15.1245 2.18744 15.9638C1.93752 16.7021 1.93752 17.4973 2.18744 18.2356C2.47157 19.0749 3.2299 19.8027 4.74655 21.2584L17.0121 33.1759V0.890625Z" fill={bgColor} strokeWidth="2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0.0429688L3.6561 11.3869C1.67601 13.367 0.685972 14.357 0.31503 15.4986C-0.01126 16.5029 -0.01126 17.5846 0.31503 18.5888C0.685972 19.7304 1.67601 20.7205 3.6561 22.7006L15 34.0445V31.223L4.74655 21.2582C3.22995 19.8026 2.47156 19.0747 2.18744 18.2354C1.93752 17.4971 1.93752 16.7019 2.18744 15.9636C2.47157 15.1243 3.2299 14.3965 4.74655 12.9408L15 2.86562V0.0429688Z" strokeWidth="2" fill={color}></path></svg>
        </div>
    )
}
export  default ArrowSVG;