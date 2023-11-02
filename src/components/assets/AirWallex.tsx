import React, { ReactElement, SVGProps } from "react";

interface AirWallexIconProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

export const AirWallex = ({
  color = "black",
  ...props
}: AirWallexIconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226"
      height="65"
      viewBox="0 0 226 65"
      fill={color}
      {...props}
    >
      <g opacity="0.5">
        <path
          d="M193.531 30.455C196.372 30.455 197.467 32.2047 197.62 33.7282C197.622 33.7512 197.619 33.7744 197.612 33.7963C197.605 33.8182 197.593 33.8383 197.578 33.8554C197.562 33.8724 197.543 33.886 197.522 33.8953C197.501 33.9045 197.479 33.9093 197.456 33.9092H189.654C189.63 33.9092 189.607 33.9042 189.586 33.8945C189.565 33.8849 189.546 33.8708 189.53 33.8532C189.515 33.8356 189.504 33.8149 189.497 33.7924C189.49 33.77 189.488 33.7464 189.491 33.7231C189.701 32.2344 191.012 30.455 193.531 30.455ZM197.807 40.1416C197.756 40.1413 197.704 40.1535 197.658 40.1771C197.612 40.2007 197.572 40.235 197.542 40.2773C196.838 41.2749 195.693 41.89 193.983 41.89C191.627 41.89 189.582 40.3316 189.361 38.1231C189.359 38.1003 189.361 38.0772 189.369 38.0554C189.376 38.0336 189.388 38.0135 189.403 37.9965C189.418 37.9795 189.437 37.9659 189.458 37.9565C189.479 37.9472 189.501 37.9423 189.524 37.9422H203.542C203.582 37.8182 203.664 36.8722 203.664 36.0077C203.664 29.4277 199.767 25.52 193.449 25.52C188.157 25.52 183.274 29.7146 183.274 36.2959C183.274 43.1654 188.28 47.1959 193.901 47.1959C198.981 47.1959 202.199 44.3349 203.243 40.8769C203.25 40.8562 203.284 40.727 203.323 40.5383C203.333 40.4903 203.332 40.4407 203.32 40.3931C203.309 40.3455 203.287 40.3011 203.256 40.263C203.225 40.225 203.187 40.1944 203.143 40.1734C203.099 40.1524 203.05 40.1415 203.002 40.1416H197.807ZM210.203 36.1912L203.556 26.6545C203.522 26.6051 203.502 26.5471 203.498 26.4868C203.494 26.4266 203.507 26.3665 203.535 26.313C203.563 26.2595 203.604 26.2148 203.656 26.1836C203.707 26.1525 203.766 26.1361 203.826 26.1364H210.361C210.472 26.1364 210.575 26.1919 210.637 26.285L214.052 31.5185C214.116 31.618 214.262 31.6167 214.327 31.5159L217.663 26.2888C217.693 26.2421 217.734 26.2037 217.782 26.177C217.83 26.1504 217.884 26.1364 217.939 26.1364H224.099C224.366 26.1364 224.521 26.4375 224.369 26.6558L217.811 35.9418C217.772 35.9971 217.751 36.0632 217.751 36.1309C217.75 36.1987 217.771 36.2649 217.81 36.3205C219.956 39.396 222.41 42.9496 224.611 46.06C224.765 46.2784 224.611 46.5782 224.344 46.5782H217.855C217.8 46.5784 217.747 46.5651 217.699 46.5394C217.651 46.5137 217.61 46.4764 217.58 46.4309L214.039 41.0268C214.024 41.0041 214.004 40.9855 213.98 40.9727C213.956 40.9599 213.929 40.9531 213.902 40.9531C213.875 40.9531 213.849 40.9599 213.825 40.9727C213.801 40.9855 213.781 41.0041 213.766 41.0268C212.705 42.6136 211.319 44.8234 210.267 46.4309C210.237 46.4765 210.196 46.5138 210.148 46.5395C210.1 46.5653 210.047 46.5785 209.992 46.5782H203.943C203.883 46.5786 203.824 46.5624 203.773 46.5315C203.722 46.5006 203.68 46.4561 203.652 46.4029C203.625 46.3497 203.612 46.2898 203.616 46.2298C203.619 46.1698 203.639 46.112 203.673 46.0626L210.204 36.566C210.242 36.511 210.262 36.4456 210.262 36.3786C210.262 36.3116 210.242 36.2462 210.204 36.1912H210.203ZM174.987 46.25V17.1295C174.987 16.9473 175.135 16.8 175.316 16.8H180.895C181.076 16.8 181.224 16.9473 181.224 17.1295V46.25C181.224 46.4309 181.076 46.5782 180.895 46.5782H175.316C175.273 46.5784 175.23 46.57 175.19 46.5536C175.151 46.5372 175.114 46.5131 175.084 46.4826C175.053 46.4521 175.029 46.4159 175.013 46.376C174.996 46.3361 174.987 46.2933 174.987 46.25ZM165.797 46.25V17.1295C165.797 16.9473 165.945 16.8 166.126 16.8H171.706C171.887 16.8 172.033 16.9473 172.033 17.1295V46.25C172.033 46.4309 171.887 46.5782 171.706 46.5782H166.126C166.083 46.5784 166.041 46.57 166.001 46.5536C165.961 46.5372 165.925 46.5131 165.894 46.4826C165.864 46.4521 165.839 46.4159 165.823 46.376C165.806 46.3361 165.798 46.2933 165.797 46.25ZM151.999 41.7659C154.502 41.7659 156.635 39.7927 156.635 36.3373C156.635 32.8004 154.542 30.9486 151.999 30.9486C149.332 30.9486 147.322 32.8004 147.322 36.3373C147.322 39.71 149.414 41.7672 151.999 41.7672V41.7659ZM156.676 43.9459C155.773 45.9205 153.723 47.1546 151.178 47.1546C145.188 47.1546 141.045 42.5891 141.045 36.2959C141.045 30.2095 144.943 25.5187 150.973 25.5187C154.624 25.5187 156.224 27.5346 156.635 28.4805V26.4646C156.635 26.2837 156.781 26.1364 156.963 26.1364H162.337C162.517 26.1364 162.665 26.2837 162.665 26.4659V46.25C162.665 46.4309 162.519 46.5782 162.337 46.5782H156.967C156.924 46.5782 156.881 46.5696 156.841 46.5528C156.801 46.536 156.765 46.5114 156.734 46.4803C156.704 46.4493 156.68 46.4125 156.664 46.3721C156.647 46.3317 156.639 46.2884 156.64 46.2448C156.65 45.5018 156.676 43.7844 156.676 43.9459ZM127.738 26.3625L131.475 37.7574C131.527 37.9125 131.745 37.9073 131.789 37.751L134.981 26.3767C135.001 26.3074 135.042 26.2464 135.099 26.203C135.156 26.1596 135.226 26.1362 135.297 26.1364H140.715C140.937 26.1364 141.095 26.3509 141.03 26.5628L134.915 46.3469C134.894 46.4143 134.853 46.4733 134.796 46.5152C134.74 46.557 134.672 46.5796 134.601 46.5795H128.885C128.816 46.5794 128.749 46.5576 128.693 46.5173C128.638 46.477 128.596 46.4201 128.574 46.3547L124.376 33.8433C124.324 33.6933 124.112 33.6946 124.064 33.8433L119.943 46.3521C119.921 46.4179 119.879 46.4751 119.824 46.5157C119.768 46.5563 119.701 46.5782 119.632 46.5782H113.792C113.722 46.5783 113.654 46.556 113.598 46.5147C113.541 46.4733 113.5 46.415 113.478 46.3482L107.284 26.5641C107.269 26.5147 107.265 26.4624 107.274 26.4113C107.282 26.3603 107.302 26.312 107.333 26.2704C107.363 26.2287 107.403 26.1949 107.449 26.1716C107.495 26.1483 107.546 26.1362 107.597 26.1364H113.385C113.531 26.1364 113.661 26.2346 113.701 26.3767L116.893 37.7148C116.937 37.8699 117.155 37.875 117.207 37.7212L120.984 26.3625C121.006 26.2966 121.047 26.2393 121.103 26.1987C121.159 26.1581 121.227 26.1363 121.296 26.1364H127.426C127.567 26.1364 127.694 26.2268 127.738 26.3625ZM105.592 31.9023C105.592 31.9504 105.581 31.9979 105.561 32.0414C105.541 32.085 105.512 32.1236 105.475 32.1545C105.438 32.1854 105.396 32.2079 105.349 32.2203C105.303 32.2328 105.255 32.235 105.208 32.2267C104.684 32.1375 104.154 32.0952 103.622 32.1C101.119 32.1 98.8632 33.5809 98.8632 37.6528V46.25C98.8632 46.4309 98.7169 46.5782 98.5358 46.5782H92.9563C92.9133 46.5784 92.8707 46.57 92.8309 46.5536C92.7911 46.5372 92.7549 46.5131 92.7244 46.4826C92.6939 46.4521 92.6696 46.4159 92.653 46.376C92.6364 46.3361 92.6278 46.2933 92.6276 46.25V26.4659C92.6276 26.285 92.774 26.1364 92.9563 26.1364H98.3304C98.5115 26.1364 98.6578 26.2837 98.6578 26.4659V28.8927C99.7247 26.5886 102.31 25.9309 103.951 25.9309C104.449 25.9309 104.947 25.9852 105.336 26.0705C105.487 26.1041 105.592 26.2384 105.592 26.3922V31.9023ZM83.3147 46.25V26.4659C83.3147 26.285 83.4623 26.1364 83.6433 26.1364H89.2229C89.4039 26.1364 89.5515 26.2837 89.5515 26.4659V46.25C89.5515 46.4309 89.4039 46.5782 89.2229 46.5782H83.6433C83.6003 46.5784 83.5577 46.57 83.5179 46.5536C83.4782 46.5372 83.442 46.5131 83.4114 46.4826C83.3809 46.4521 83.3567 46.4159 83.3401 46.376C83.3235 46.3361 83.3148 46.2933 83.3147 46.25ZM86.392 16.2236C88.4436 16.2236 90.0843 17.8686 90.0843 19.8845C90.0843 21.9004 88.4436 23.5454 86.392 23.5454C84.4226 23.5454 82.7819 21.9004 82.7819 19.8845C82.7819 17.8686 84.4226 16.2236 86.392 16.2236ZM63.4447 34.7323H70.0385C70.1515 34.7323 70.2311 34.6212 70.1925 34.5139L66.9367 25.0987C66.9257 25.0661 66.9049 25.0378 66.8771 25.0177C66.8493 24.9976 66.816 24.9867 66.7818 24.9866C66.7476 24.9865 66.7143 24.9971 66.6863 25.0169C66.6584 25.0368 66.6373 25.0649 66.626 25.0974L63.2919 34.5139C63.2534 34.6199 63.333 34.7336 63.446 34.7336L63.4447 34.7323ZM72.0888 40.6559H61.311C61.2433 40.656 61.1774 40.6772 61.1223 40.7165C61.0671 40.7559 61.0254 40.8114 61.0028 40.8756L59.0642 46.3598C59.0416 46.4242 58.9997 46.4799 58.9443 46.5193C58.8889 46.5586 58.8227 46.5797 58.7548 46.5795H52.6515C52.5984 46.5798 52.546 46.5671 52.4988 46.5425C52.4517 46.5178 52.4112 46.4821 52.3809 46.4382C52.3506 46.3943 52.3313 46.3436 52.3248 46.2906C52.3182 46.2376 52.3246 46.1837 52.3433 46.1337L63.0506 17.6296C63.0741 17.5668 63.116 17.5128 63.1709 17.4747C63.2257 17.4366 63.2908 17.4163 63.3574 17.4164H70.4108C70.5469 17.4164 70.6701 17.5017 70.7176 17.6309L81.3042 46.135C81.3224 46.1849 81.3284 46.2384 81.3216 46.2911C81.3148 46.3438 81.2954 46.3941 81.2651 46.4376C81.2349 46.4812 81.1946 46.5167 81.1477 46.5412C81.1009 46.5656 81.0488 46.5784 80.996 46.5782H74.6449C74.5771 46.5782 74.511 46.5571 74.4556 46.5177C74.4002 46.4784 74.3583 46.4228 74.3355 46.3585L72.3969 40.8756C72.3742 40.8115 72.3324 40.7561 72.2773 40.7168C72.2222 40.6775 72.1563 40.6562 72.0888 40.6559Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.4392 28.3568C45.2378 29.1392 45.7917 30.1395 46.0328 31.2347C46.2739 32.3298 46.1917 33.472 45.7962 34.5208L42.783 42.7601C41.9922 44.9233 40.1897 46.5967 37.9622 47.0335C36.848 47.2579 35.6942 47.1733 34.6241 46.7886C33.554 46.404 32.6079 45.7337 31.8871 44.8496L13.8184 23.0599C13.7734 23.0063 13.7153 22.9655 13.6498 22.9416C13.5843 22.9177 13.5137 22.9115 13.4451 22.9237C13.3764 22.9358 13.3122 22.9659 13.2587 23.0109C13.2053 23.0559 13.1645 23.1143 13.1405 23.1801L7.26179 39.1844C7.13983 39.5153 7.46335 39.8357 7.78431 39.7039L14.9982 36.7382C15.4049 36.5723 15.8413 36.4927 16.28 36.5045C16.7187 36.5163 17.1502 36.6192 17.5475 36.8068C17.9448 36.9944 18.2993 37.2626 18.5888 37.5946C18.8783 37.9266 19.0965 38.3152 19.2297 38.736C19.7625 40.3811 18.8664 42.1579 17.2886 42.8066L7.86519 46.6794C6.12046 47.3966 4.11639 47.27 2.54497 46.2142C1.47409 45.4939 0.67571 44.4312 0.278766 43.1979C-0.118178 41.9646 -0.0905082 40.6326 0.357306 39.417L7.30287 20.5142C8.12581 18.2735 10.0002 16.6918 12.3175 16.2835C13.446 16.0799 14.6081 16.1827 15.684 16.5813C16.7599 16.9799 17.7108 17.6599 18.4389 18.5513L28.8097 31.0602L38.3487 27.1382C40.4683 26.2673 42.8023 26.7338 44.4392 28.3568ZM38.9379 34.6397C39.0586 34.3088 38.7351 33.9884 38.4141 34.1215L33.144 36.2873L36.3048 40.1006C36.3496 40.1549 36.4079 40.1963 36.4737 40.2206C36.5395 40.2449 36.6106 40.2513 36.6796 40.2391C36.7487 40.2269 36.8133 40.1966 36.867 40.1512C36.9206 40.1057 36.9614 40.0468 36.9852 39.9805L38.9367 34.6397H38.9379Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
