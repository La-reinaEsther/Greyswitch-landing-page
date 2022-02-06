const colors: any = {
    orange: '#DDB09C',
    purple: '#B69CDD',
    green: '#B0DD9C',
  };

  
  export const RightFlipSpring = ({
    color = 'orange',
    ...rest
  }: {
    color?: string;
    [key: string]: unknown;
  }) => {
    return (
      <svg
        width="277"
        viewBox="0 0 277 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M177.869 450.564C154.573 438.142 133.807 421.061 117.137 400.629C100.379 380.15 87.8044 356.366 80.2071 330.961C72.5622 305.644 70.1177 278.713 72.7982 252.403C75.4786 226.093 83.5552 200.324 96.1135 176.988C108.76 153.7 126.064 132.942 146.671 116.367C167.279 99.7922 191.198 87.1778 216.595 79.804C241.993 72.4303 268.836 69.9381 295.138 72.8421C321.441 75.746 347.027 83.9505 370.091 96.5892C346.796 84.1664 321.242 76.321 294.972 73.7761C268.798 71.0555 242.219 73.6908 217.037 81.2956C191.903 88.8125 168.215 101.211 147.831 117.793C127.495 134.288 110.374 154.918 97.959 177.99C85.4559 201.015 77.387 226.56 74.6262 252.599C71.8177 278.726 74.3174 305.345 81.6987 330.519C89.08 355.693 101.431 379.469 117.83 399.981C134.181 420.582 154.764 437.79 177.869 450.564Z"
          fill={colors[color]}
        />
        <path
          d="M183.405 440.37C161.516 428.711 141.837 412.562 126.11 393.326C110.296 374.041 98.4827 351.581 91.3272 327.668C84.1716 303.754 81.7621 278.436 84.3494 253.554C86.889 228.761 94.5134 204.453 106.356 182.436C118.286 160.466 134.563 140.97 154.023 125.252C173.435 109.621 195.943 97.7192 219.985 90.747C243.938 83.727 269.249 81.541 293.995 84.1685C318.781 86.9316 342.905 94.684 364.652 106.607C342.762 94.9476 318.582 87.5066 293.917 85.1504C269.211 82.6585 244.116 85.0755 220.426 92.2385C196.736 99.4016 174.46 111.087 155.183 126.678C135.954 142.181 119.901 161.684 108.113 183.39C96.3263 205.096 88.7572 229.093 86.1775 253.75C83.5098 278.36 85.9269 303.456 92.8187 327.226C99.7106 350.996 111.436 373.409 126.891 392.725C142.299 412.13 161.571 428.399 183.405 440.37Z"
          fill={colors[color]}
        />
        <path
          d="M188.892 430.264C168.321 419.32 149.905 404.199 135.035 386.11C120.212 367.933 109.111 346.884 102.31 324.415C95.5082 301.945 93.3169 278.111 95.7157 254.834C98.1622 231.469 105.199 208.663 116.413 188.011C127.628 167.36 142.925 149.039 161.19 134.264C179.454 119.49 200.591 108.437 223.141 101.906C245.603 95.328 269.39 93.2247 292.707 95.759C315.976 98.3813 338.687 105.594 359.067 116.888C338.496 105.945 315.777 98.9562 292.629 96.7408C269.44 94.3897 245.869 96.7242 223.583 103.398C201.384 110.119 180.383 121.132 162.35 135.691C144.268 150.337 129.242 168.578 118.171 188.966C107.099 209.353 99.9826 231.889 97.5436 255.03C95.0168 278.123 97.2634 301.647 103.801 323.973C110.339 346.299 121.217 367.341 135.816 385.51C150.279 403.719 168.424 418.921 188.892 430.264Z"
          fill={colors[color]}
        />
        <path
          d="M194.379 420.158C175.126 409.93 157.885 395.788 143.959 378.894C130.081 361.913 119.605 342.228 113.381 321.21C107.021 300.232 105 277.969 107.218 256.073C109.436 234.178 116.108 212.88 126.607 193.547C137.105 174.214 151.423 157.068 168.492 143.237C185.562 129.406 205.423 119.026 226.481 112.937C247.539 106.849 269.802 104.828 291.514 107.174C313.315 109.567 334.517 116.415 353.579 126.994C334.326 116.767 313.068 110.23 291.436 108.156C269.764 105.945 247.765 108.109 226.923 114.429C206.128 120.661 186.538 130.961 169.652 144.664C152.766 158.366 138.72 175.432 128.364 194.501C118.009 213.571 111.344 234.645 109.046 256.269C106.748 277.894 108.824 299.845 114.872 320.768C120.969 341.603 131.221 361.28 144.74 378.294C158.26 395.308 175.317 409.578 194.379 420.158Z"
          fill={colors[color]}
        />
        <path
          d="M199.869 410.051C181.934 400.54 165.868 387.377 152.886 371.679C139.951 355.893 130.236 337.531 124.365 317.957C118.495 298.383 116.557 277.644 118.586 257.353C120.663 236.974 126.883 217.138 136.578 199.075C146.313 181.148 159.699 165.089 175.661 152.25C191.623 139.411 209.985 129.696 229.639 124.097C249.254 118.362 269.945 116.512 290.228 118.764C310.512 121.017 330.253 127.413 347.996 137.276C330.062 127.764 310.266 121.68 290.103 119.834C269.947 117.765 249.384 119.798 230.033 125.676C210.683 131.554 192.416 141.093 176.726 153.852C161.035 166.611 147.88 182.454 138.328 200.253C128.688 218.004 122.476 237.617 120.319 257.725C118.161 277.833 120.107 298.348 125.714 317.779C131.321 337.21 140.86 355.476 153.523 371.343C166.29 386.81 182.125 400.188 199.869 410.051Z"
          fill={colors[color]}
        />
        <path
          d="M205.404 399.858C188.787 391.062 173.896 378.879 161.906 364.288C149.915 349.698 140.961 332.659 135.444 314.529C129.927 296.399 128.16 277.232 130.096 258.369C132.032 239.507 137.8 221.132 146.732 204.475C155.751 187.866 168.157 172.983 182.876 161.176C197.643 149.281 214.681 140.326 232.892 135.081C251.014 129.788 270.221 128.156 289.036 130.18C307.803 132.292 326.082 138.235 342.556 147.295C325.939 138.499 307.604 132.867 288.958 131.161C270.271 129.321 251.28 131.184 233.333 136.572C215.474 142.009 198.531 150.787 184.036 162.602C169.541 174.417 157.365 189.084 148.489 205.43C139.565 221.863 133.805 240.014 131.924 258.566C129.908 277.157 131.683 296.1 136.936 314.087C142.189 332.074 150.967 349.017 162.687 363.688C174.27 378.399 188.93 390.798 205.404 399.858Z"
          fill={colors[color]}
        />
        <path
          d="M210.892 389.753C195.594 381.673 181.878 370.469 170.831 357.074C159.785 343.679 151.455 328.004 146.516 311.325C141.441 294.686 139.804 276.956 141.599 259.61C143.395 242.264 148.622 225.303 156.926 210.012C165.23 194.722 176.657 181.013 190.18 170.15C203.751 159.199 219.466 151.005 236.233 146.113C252.952 141.31 270.546 139.713 287.845 141.596C305.095 143.567 321.961 148.97 337.068 157.402C321.77 149.322 304.984 144.19 287.767 142.578C270.597 140.878 253.177 142.57 236.674 147.605C220.219 152.552 204.727 160.753 191.34 171.576C177.952 182.399 166.844 195.94 158.684 210.967C150.475 226.082 145.167 242.772 143.427 259.806C141.552 276.881 143.244 294.3 148.008 310.883C152.819 327.379 160.837 342.998 171.612 356.474C182.34 370.038 195.785 381.321 210.892 389.753Z"
          fill={colors[color]}
        />
        <path
          d="M216.379 379.645C202.399 372.281 189.858 362.057 179.755 349.857C169.701 337.569 162.084 323.306 157.499 308.071C152.913 292.836 151.399 276.765 152.965 260.888C154.62 245.059 159.396 229.559 166.983 215.586C174.571 201.614 184.971 189.168 197.347 179.161C209.722 169.154 224.074 161.585 239.389 157.271C254.664 152.821 270.775 151.442 286.556 153.185C302.29 155.015 317.694 159.966 331.484 167.682C317.504 160.318 302.18 155.638 286.478 154.166C270.825 152.607 254.93 154.217 239.831 158.763C224.819 163.356 210.699 170.708 198.506 180.588C186.314 190.467 176.185 202.832 168.741 216.541C161.249 230.338 156.44 245.479 154.793 261.084C153.147 276.69 154.621 292.625 158.99 307.629C163.312 322.721 170.753 336.889 180.536 349.257C190.32 361.625 202.59 371.929 216.379 379.645Z"
          fill={colors[color]}
        />
        <path
          d="M221.869 369.54C209.206 362.892 197.928 353.695 188.77 342.691C179.659 331.598 172.803 318.658 168.571 304.867C164.34 291.076 163.044 276.489 164.47 262.129C165.895 247.769 170.307 233.778 177.091 221.076C183.963 208.421 193.383 197.151 204.651 188.135C215.831 179.072 228.859 172.264 242.731 168.304C256.514 164.295 271.189 163.047 285.454 164.649C299.718 166.25 313.661 170.749 325.997 177.789C313.335 171.141 299.472 166.913 285.288 165.583C271.151 164.164 256.692 165.644 243.173 169.795C229.653 173.946 216.808 180.626 205.811 189.562C194.814 198.497 185.577 209.639 178.936 222.078C172.16 234.557 167.804 248.236 166.297 262.325C164.791 276.414 166.095 290.777 170.063 304.425C174.031 318.073 180.623 330.87 189.463 342.043C198.35 353.128 209.445 362.453 221.869 369.54Z"
          fill={colors[color]}
        />
        <path
          d="M227.403 359.346C216.059 353.413 205.956 345.196 197.789 335.299C189.622 325.402 183.479 313.873 179.737 301.486C175.947 289.186 174.781 276.036 176.066 263.192C177.351 250.349 181.31 237.819 187.378 226.435C193.534 215.099 201.975 205.003 212.048 196.932C222.121 188.86 233.738 182.765 246.165 179.159C258.545 175.64 271.608 174.426 284.356 175.887C297.104 177.348 309.586 181.395 320.651 187.631C298.011 175.678 270.847 173.103 246.567 180.515C234.451 184.177 223.017 190.144 213.168 198.223C203.366 206.214 195.109 216.181 189.096 227.254C183.083 238.327 179.131 250.633 177.854 263.253C176.489 275.825 177.71 288.664 181.188 300.908C188.05 325.573 205.049 346.866 227.403 359.346Z"
          fill={colors[color]}
        />
        <path
          d="M232.891 349.241C222.866 344.024 213.938 336.786 206.715 328.084C199.492 319.383 194.022 309.129 190.721 298.234C187.421 287.338 186.29 275.8 187.434 264.473C188.578 253.146 191.997 242.03 197.437 232.012C202.878 221.994 210.339 213.073 219.217 205.946C228.094 198.818 238.347 193.348 249.323 190.319C260.259 187.154 271.79 186.247 283.069 187.479C294.301 188.798 305.321 192.393 315.068 197.914C295.064 187.392 271.11 185.194 249.765 191.81C239.093 195.118 229.071 200.373 220.376 207.372C211.682 214.371 204.492 223.212 199.195 232.966C193.898 242.721 190.399 253.565 189.262 264.669C188.038 275.725 189.176 287.039 192.213 297.792C198.239 319.385 213.174 338.192 232.891 349.241Z"
          fill={colors[color]}
        />
        <path
          d="M238.38 339.134C229.673 334.633 221.919 328.374 215.64 320.868C209.409 313.274 204.652 304.432 201.793 295.028C198.847 285.576 198.022 275.57 198.937 265.711C199.941 255.901 202.908 246.247 207.632 237.547C212.357 228.847 218.839 221.101 226.521 214.918C234.203 208.734 243.132 204.025 252.665 201.349C262.109 198.626 272.115 197.801 281.878 198.893C291.593 200.072 301.152 203.214 309.581 208.019C292.301 198.977 271.515 197.021 253.018 202.793C243.838 205.66 235.091 210.241 227.593 216.296C220.094 222.352 213.931 229.929 209.302 238.453C204.721 246.89 201.673 256.273 200.678 265.86C199.594 275.399 200.514 285.23 203.197 294.538C208.427 313.196 221.299 329.517 238.38 339.134Z"
          fill={colors[color]}
        />
        <path
          d="M243.867 329.028C236.478 325.243 229.9 319.964 224.565 313.653C219.278 307.254 215.233 299.823 212.776 291.775C210.271 283.815 209.529 275.333 210.304 266.991C211.166 258.698 213.681 250.504 217.69 243.123C221.698 235.741 227.153 229.258 233.688 223.931C240.174 218.691 247.781 214.742 255.821 212.509C263.862 210.275 272.344 209.533 280.59 210.483C288.788 211.522 296.934 214.124 303.997 218.301C289.353 210.691 271.864 209.159 256.263 214C248.486 216.377 241.151 220.246 234.847 225.357C228.544 230.469 223.273 236.823 219.447 244.077C215.582 251.195 213.035 259.029 212.132 267.187C211.277 275.258 212.027 283.516 214.268 291.334C218.703 307.056 229.558 320.802 243.867 329.028Z"
          fill={colors[color]}
        />
        <path
          d="M249.403 318.835C243.42 315.813 238.017 311.513 233.586 306.262C229.242 301.059 225.871 294.904 223.855 288.347C219.689 275.274 221.306 260.563 227.891 248.435C234.429 236.396 245.976 227.077 259.169 223.317C265.766 221.437 272.677 220.866 279.494 221.723C286.223 222.533 292.772 224.723 298.652 228.144C286.597 222.053 272.365 220.81 259.659 224.721C253.326 226.744 247.314 229.852 242.206 234.019C237.098 238.187 232.806 243.366 229.609 249.254C226.459 255.054 224.452 261.474 223.69 268.116C222.976 274.67 223.643 281.404 225.395 287.818C228.891 300.868 237.683 312.128 249.403 318.835Z"
          fill={colors[color]}
        />
        <path
          d="M254.892 308.727C250.227 306.421 245.999 303.101 242.512 299.046C239.112 295.038 236.454 290.294 234.928 285.141C233.354 280.076 232.777 274.642 233.318 269.246C233.811 263.938 235.509 258.715 237.998 253.922C240.575 249.177 244.071 245.044 248.303 241.652C252.486 238.348 257.27 235.825 262.511 234.347C267.616 232.909 273.042 232.556 278.303 233.137C283.516 233.805 288.603 235.544 293.165 238.249C283.747 233.589 272.723 232.724 262.953 235.839C253.094 238.906 244.671 245.825 239.803 254.789C234.936 263.752 233.671 274.672 236.515 284.524C239.127 294.591 245.808 303.453 254.892 308.727Z"
          fill={colors[color]}
        />
        <path
          d="M260.38 298.622C257.033 297.032 253.98 294.691 251.437 291.831C248.981 289.018 247.084 285.598 245.911 281.889C244.692 278.268 244.333 274.318 244.685 270.527C245.037 266.735 246.195 262.926 248.009 259.587C249.87 256.159 252.386 253.202 255.375 250.842C258.363 248.482 261.871 246.632 265.573 245.683C269.322 244.647 273.088 244.416 276.92 244.904C280.704 245.479 284.242 246.718 287.486 248.707C280.704 245.479 272.978 245.039 266.014 247.175C259.139 249.358 253.155 254.302 249.719 260.629C246.283 266.956 245.443 274.58 247.308 281.623C249.315 288.403 253.98 294.691 260.38 298.622Z"
          fill={colors[color]}
        />
        <path
          d="M265.867 288.516C261.809 286.768 258.442 283.119 256.982 278.684C256.251 276.467 256.015 274.177 256.187 271.766C256.398 269.491 257.104 267.143 258.201 265.122C259.299 263.101 260.884 261.231 262.677 259.815C264.47 258.399 266.654 257.309 268.912 256.714C273.427 255.525 278.321 256.362 281.997 258.813C277.939 257.065 273.382 256.866 269.354 258.206C265.326 259.546 261.963 262.386 259.959 266.077C257.955 269.768 257.404 274.134 258.473 278.242C259.542 282.35 262.191 286.065 265.867 288.516Z"
          fill={colors[color]}
        />
      </svg>
    );
  };
  
  export const BigRightSpring = ({
    color = 'orange',
    ...rest
  }: {
    color?: string;
    [key: string]: unknown;
  }): JSX.Element => {
    return (
      <svg
        width="697"
        viewBox="0 0 697 717"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M287.937 -384.986C341.449 -347.642 387.382 -299.613 422.278 -244.564C457.374 -189.372 481.231 -127.304 492.397 -62.722C503.705 1.65855 501.776 68.4686 487.453 132.246C473.13 196.024 445.724 256.886 408.035 310.456C370.145 363.884 321.569 409.733 266.117 444.342C210.665 478.952 148.252 502.867 83.7545 513.486C19.2568 524.106 -47.3517 522.319 -111.045 507.45C-174.738 492.581 -235.113 464.914 -287.994 427.108C-234.482 464.452 -174.082 491.228 -110.363 505.207C-46.9299 519.588 19.0737 520.946 83.1096 509.696C147.002 498.648 208.785 475.194 263.691 440.5C318.454 406.008 366.542 360.419 403.801 307.454C441.263 254.631 468.584 194.315 483.025 131.227C497.608 67.9369 499.31 1.87446 488.606 -62.0771C477.903 -126.029 454.592 -188.012 420.386 -243.178C386.323 -298.546 340.877 -346.836 287.937 -384.986Z"
          fill={colors[color]}
        />
        <path
          d="M271.351 -361.602C321.637 -326.546 365.177 -281.123 398.108 -229.285C431.24 -177.305 453.619 -118.708 464.14 -57.9168C474.661 2.87481 473.12 65.7183 459.446 126.017C445.915 186.114 420.049 243.523 384.505 294.069C348.76 344.473 303.076 387.525 250.693 420.371C198.452 453.016 139.713 475.597 78.6608 485.63C17.8106 495.806 -44.9486 493.72 -104.903 479.987C-164.916 465.91 -221.837 439.783 -271.694 404.122C-221.408 439.178 -164.259 464.557 -104.422 477.6C-44.5269 490.989 17.7705 492.445 78.0158 481.84C138.261 471.235 196.37 449.115 248.266 416.529C300.019 384.145 345.156 341.008 380.473 291.21C415.789 241.412 441.428 184.75 455.018 124.998C468.809 65.3882 470.265 3.09072 460.35 -57.2719C450.434 -117.635 428.256 -176.088 396.014 -228.043C363.916 -280.199 321.41 -325.798 271.351 -361.602Z"
          fill={colors[color]}
        />
        <path
          d="M254.91 -338.416C302.172 -305.504 342.915 -262.974 374.082 -214.205C405.107 -165.234 426.152 -110.311 436.23 -53.1671C446.307 3.97696 444.668 63.1144 431.929 119.531C419.047 176.149 395.065 230.047 361.464 277.426C327.864 324.805 284.93 365.262 235.758 396.143C186.586 427.025 131.461 447.927 74.1995 457.315C17.1398 466.846 -41.8546 465.006 -98.3299 451.922C-154.662 438.637 -208.274 414.252 -254.964 380.534C-207.702 413.446 -154.006 437.285 -97.8496 449.536C-41.6346 462.132 16.8981 463.342 73.5545 453.525C130.009 443.565 184.79 422.721 233.331 392.301C282.016 361.68 324.26 321.34 357.432 274.566C390.604 227.792 414.703 174.584 427.501 118.512C440.5 62.5825 441.912 4.19289 432.439 -52.5222C422.967 -109.237 402.467 -164.076 371.989 -212.962C341.855 -261.907 301.801 -304.555 254.91 -338.416Z"
          fill={colors[color]}
        />
        <path
          d="M238.466 -315.23C282.703 -284.463 320.851 -244.682 350.054 -199.125C379.113 -153.365 399.027 -101.973 408.114 -48.5604C417.547 4.79303 415.952 60.0229 404.064 113.104C392.175 166.184 369.532 216.486 338.076 260.84C306.62 305.195 266.436 343.057 220.475 371.974C174.514 400.891 122.718 420.518 69.2471 429.261C15.7764 438.004 -39.4532 436.409 -92.0464 424.261C-144.841 411.969 -194.857 388.922 -238.522 357.349C-194.285 388.116 -144.042 410.415 -91.566 421.874C-39.0315 433.678 15.5933 434.844 68.6022 425.47C121.468 416.298 172.575 396.788 218.048 368.132C263.522 339.475 303.016 301.731 334.043 257.981C365.07 214.231 387.63 164.476 399.635 112.084C411.641 59.6925 413.008 5.21061 404.324 -47.9155C395.496 -100.84 376.129 -152.149 347.96 -197.882C319.791 -243.615 282.131 -283.657 238.466 -315.23Z"
          fill={colors[color]}
        />
        <path
          d="M222.022 -292.047C263.235 -263.424 298.788 -226.393 326.026 -184.047C353.121 -141.499 371.557 -93.578 380.202 -43.8135C388.846 5.95107 387.497 57.416 376.544 106.615C365.448 156.015 344.344 202.863 315.234 244.337C286.066 285.466 248.488 320.934 205.538 347.743C162.587 374.552 114.665 392.988 64.7834 400.943C14.9602 409.243 -36.3618 407.693 -85.4761 396.193C-134.59 384.694 -181.153 363.187 -221.794 333.758C-180.581 362.38 -133.791 383.14 -84.8528 393.605C-35.9986 404.617 15.063 405.68 64.2814 396.951C113.5 388.223 161.135 370.19 203.397 343.498C245.659 316.806 282.606 281.799 311.286 240.931C340.169 200.205 361.188 153.903 372.402 105.192C383.615 56.4809 384.879 5.56232 376.84 -43.7733C368.8 -93.1089 350.768 -140.744 324.362 -183.409C297.585 -225.125 262.663 -262.618 222.022 -292.047Z"
          fill={colors[color]}
        />
        <path
          d="M205.436 -268.659C243.625 -242.181 276.582 -207.9 301.713 -168.563C326.843 -129.227 343.802 -84.7775 352.003 -38.6605C360.204 7.45653 358.9 55.0134 348.596 100.733C338.292 146.453 318.728 189.848 291.906 228.096C264.882 266.201 230.054 299.074 190.458 323.717C150.718 348.561 106.268 365.52 60.0342 373.032C14.0016 380.687 -33.6141 379.038 -79.191 368.532C-124.625 357.824 -167.734 337.857 -205.494 310.775C-167.305 337.252 -123.969 356.472 -78.7107 366.146C-33.3941 376.164 13.7598 377.182 59.3892 369.241C104.817 361.158 148.981 344.602 188.031 319.875C227.082 295.147 261.279 262.736 287.873 225.236C314.611 187.535 334.091 144.686 344.167 99.714C354.589 54.6834 355.809 7.67243 348.213 -38.0156C340.617 -83.7037 324.061 -127.867 299.62 -167.321C275.523 -206.833 243.196 -241.577 205.436 -268.659Z"
          fill={colors[color]}
        />
        <path
          d="M188.994 -245.471C224.159 -221.138 254.521 -189.606 277.687 -153.481C300.852 -117.356 316.679 -76.4371 323.89 -34.052C331.447 8.27449 330.245 52.2683 320.733 94.3077C311.221 136.347 293.398 176.432 268.519 211.513C243.641 246.593 211.562 276.871 175.177 299.549C138.649 322.429 97.6712 337.911 55.0845 344.979C12.6407 351.846 -31.0085 350.586 -72.9049 340.872C-114.658 330.957 -154.457 312.731 -189.05 287.592C-153.885 311.925 -114.204 329.461 -72.4245 338.486C-30.7883 347.712 12.4576 348.686 54.4395 341.189C96.2784 333.893 136.71 318.327 172.751 295.707C208.791 273.087 240.037 243.129 264.487 208.653C289.08 173.976 307.02 134.58 316.305 93.2884C325.934 51.9382 326.908 8.69203 320.1 -33.4071C313.149 -75.3046 298.07 -115.996 275.593 -152.239C253.26 -188.682 223.587 -220.332 188.994 -245.471Z"
          fill={colors[color]}
        />
        <path
          d="M172.55 -222.286C204.691 -200.098 232.458 -171.316 253.659 -138.403C274.717 -105.288 289.209 -68.0415 295.977 -29.304C302.745 9.43354 301.731 49.3181 293.213 87.82C284.493 126.179 268.21 162.811 245.476 194.867C222.742 226.923 193.556 254.404 160.239 275.32C126.923 296.235 89.4751 310.584 50.6203 316.663C11.8241 323.086 -28.1191 321.728 -66.335 312.806C-104.408 303.683 -140.754 286.997 -172.323 264.003C-140.182 286.19 -103.953 302.187 -65.8546 310.42C-27.8989 318.854 11.5824 319.582 49.9753 312.872C88.1667 306.02 124.984 292.132 157.813 271.477C190.642 250.822 219.138 223.459 241.444 192.007C263.892 160.354 280.149 124.613 288.784 86.8005C297.42 48.9878 298.493 9.44789 292.187 -28.6591C286.023 -66.9677 271.934 -103.928 251.565 -137.16C231.196 -170.392 204.119 -199.292 172.55 -222.286Z"
          fill={colors[color]}
        />
        <path
          d="M156.107 -199.104C185.223 -179.061 210.193 -153.171 229.43 -123.469C248.523 -93.5655 261.538 -59.7911 267.863 -24.7012C274.188 10.3888 273.075 46.5673 265.349 81.3887C257.622 116.21 242.678 149.246 222.29 178.421C201.701 207.453 175.265 232.339 144.958 251.146C114.853 270.097 80.8766 282.969 45.6693 288.605C10.6637 294.383 -25.7162 293.127 -60.2516 284.997C-94.7871 276.868 -127.68 261.722 -155.88 240.814C-126.763 260.857 -93.988 275.314 -59.5698 282.754C-25.2946 290.396 10.6235 291.022 45.0243 284.814C79.4251 278.606 112.914 265.995 142.531 247.304C172.149 228.614 198.098 203.989 218.056 175.418C238.36 146.789 253.077 114.501 260.92 80.3692C268.764 46.237 269.793 10.605 264.073 -24.056C258.353 -58.7171 245.942 -92.0626 227.538 -122.084C208.991 -151.903 184.508 -178.053 156.107 -199.104Z"
          fill={colors[color]}
        />
        <path
          d="M139.521 -175.716C165.614 -157.818 187.989 -134.677 205.117 -107.985C222.246 -81.2928 233.927 -51.1918 239.464 -19.6907C245.144 11.6088 244.134 44.2239 237.2 75.3649C230.265 106.506 216.861 136.088 198.618 162.239C180.173 188.247 156.487 210.538 129.391 227.381C102.296 244.223 71.993 255.761 40.4333 260.954C9.01663 265.944 -23.3969 265.077 -54.2519 257.74C-85.107 250.402 -114.547 236.796 -139.865 218.235C-87.8236 254.233 -21.9197 268.549 39.847 257.508C70.6589 252.088 100.474 240.81 127.023 223.883C153.43 207.158 176.629 185.127 194.644 159.724C212.66 134.321 225.98 105.285 232.83 74.6899C239.881 44.2381 240.664 12.3709 235.732 -18.7012C226.154 -81.2487 190.705 -138.508 139.521 -175.716Z"
          fill={colors[color]}
        />
        <path
          d="M123.079 -152.533C146.147 -136.779 165.927 -116.388 181.091 -92.9076C196.255 -69.4267 206.661 -42.6543 211.553 -14.9438C216.445 12.7667 215.823 41.4153 209.681 68.8758C203.539 96.3363 191.876 122.609 175.576 145.593C159.276 168.576 138.339 188.272 114.455 203.15C90.571 218.028 63.7986 228.433 35.9708 232.636C8.20167 237.184 -20.3626 236.016 -47.6801 229.672C-74.8546 223.127 -100.841 211.061 -123.136 194.644C-77.1423 226.353 -19.0028 238.799 35.3259 228.846C62.4902 223.869 88.6322 213.926 112.029 199.308C135.425 184.69 155.673 165.112 171.544 142.733C187.415 120.354 199.195 94.7708 205.253 67.8565C211.512 41.0852 212.049 12.9827 207.762 -14.2989C199.331 -69.0637 168.215 -119.614 123.079 -152.533Z"
          fill={colors[color]}
        />
        <path
          d="M106.636 -129.348C126.68 -115.739 143.864 -98.0975 157.063 -77.8281C170.12 -57.3571 179.191 -34.2579 183.438 -10.3379C187.887 13.7251 186.965 38.5245 181.817 62.4476C176.467 86.2276 166.344 109.047 152.188 129.007C138.033 148.966 119.846 166.066 99.1731 178.98C78.5005 191.893 55.1997 200.822 31.0195 204.581C7.04085 208.484 -17.7586 207.562 -41.3956 202.01C-64.8897 196.257 -87.4229 185.73 -106.693 171.458C-66.95 198.735 -16.5159 209.655 30.5763 200.933C53.9501 196.602 76.7633 187.934 96.9483 175.28C117.133 162.627 134.489 145.846 148.358 126.29C162.084 106.935 172.324 84.8051 177.59 61.5713C183.057 38.4804 183.693 14.0842 179.849 -9.54982C172.506 -56.8765 145.723 -100.718 106.636 -129.348Z"
          fill={colors[color]}
        />
        <path
          d="M90.1947 -106.156C107.215 -94.6922 121.804 -79.8007 133.038 -62.7427C144.13 -45.4831 151.867 -26.057 155.528 -5.58298C159.332 14.6895 158.656 35.724 154.3 55.9666C149.742 76.0662 141.159 95.4323 129.148 112.368C117.138 129.303 101.843 143.606 84.2384 154.757C66.7772 165.705 46.9481 173.157 26.5584 176.271C6.16875 179.386 -14.8658 178.71 -34.8224 173.95C-54.636 168.989 -73.8593 160.204 -89.9625 147.875C-56.2675 170.862 -13.7992 179.77 25.9135 172.481C45.6984 168.937 64.8384 161.603 81.812 150.915C98.7856 140.226 113.593 126.183 125.116 109.508C136.697 93.1775 145.255 74.7021 149.871 54.9471C154.345 35.3937 154.937 14.9054 151.738 -4.93808C145.483 -44.8267 122.889 -81.758 90.1947 -106.156Z"
          fill={colors[color]}
        />
        <path
          d="M73.6085 -82.7751C87.4025 -73.5986 99.3963 -61.4565 108.725 -47.2653C117.852 -33.2171 124.314 -17.12 127.33 -0.436456C133.706 32.8719 125.408 68.4998 105.676 96.3223C86.0878 123.943 55.0074 143.414 21.5231 148.757C4.78098 151.428 -12.3458 150.796 -28.8236 146.686C-45.0997 142.718 -60.5251 135.415 -73.9488 125.289C-46.1592 143.785 -11.598 151.024 20.7352 145.168C36.8725 142.068 52.5408 136.211 66.303 127.487C80.0652 118.763 92.123 107.315 101.703 93.8072C111.14 80.5008 117.955 65.3358 121.78 49.2613C125.461 33.3884 125.807 16.6648 123.396 0.410234C118.658 -32.6451 100.397 -62.8677 73.6085 -82.7751Z"
          fill={colors[color]}
        />
        <path
          d="M57.1637 -59.5861C67.9335 -52.5542 77.3321 -43.1617 84.6961 -32.182C91.8585 -21.3453 96.9862 -8.92138 99.2141 4.17322C101.585 17.0662 101.401 30.5713 98.4855 43.6546C95.7133 56.5362 90.0084 68.853 82.489 79.883C74.768 90.7701 64.9721 99.8829 53.5892 106.961C42.3492 113.837 29.8667 118.62 16.5705 120.705C3.61891 122.732 -9.80171 122.001 -22.5404 119.027C-35.136 115.852 -47.1083 110.088 -57.5078 102.107C-35.7665 116.314 -8.96961 121.682 15.9255 116.915C41.0223 112.29 63.7297 97.7894 78.3138 77.225C92.898 56.6605 99.216 30.2339 95.1376 5.22147C91.6897 -20.2528 77.904 -43.9681 57.1637 -59.5861Z"
          fill={colors[color]}
        />
        <path
          d="M40.7198 -36.4005C48.4655 -31.5134 55.2689 -24.8705 60.6682 -17.1022C65.8659 -9.47688 69.5163 -0.524423 71.3009 8.92261C73.2286 18.168 72.9458 27.9666 70.9656 37.1678C68.9854 46.369 65.0219 55.3758 59.5886 63.0371C54.0123 70.9 46.9662 77.4173 38.9376 82.329C30.9091 87.2407 21.7551 90.7484 12.3925 91.9868C2.8868 93.4268 -6.42439 92.8836 -15.6842 90.5588C-24.801 88.0325 -33.1186 83.9519 -40.494 78.1154C-24.8011 88.0326 -5.96981 91.3881 11.7475 88.1963C29.2632 84.8616 45.4046 74.492 55.6993 59.9759C65.994 45.4598 70.2991 26.9987 67.7965 9.16411C64.865 -8.06561 55.2688 -24.8704 40.7198 -36.4005Z"
          fill={colors[color]}
        />
        <path
          d="M24.2786 -13.2161C33.7215 -7.73134 40.9095 2.21466 43.1889 13.5276C44.3286 19.1841 44.233 24.8734 43.1035 30.7387C41.9154 36.2594 39.4918 41.8131 36.2032 46.4502C32.9146 51.0873 28.4751 55.2109 23.658 58.158C18.8409 61.105 13.1585 63.1356 7.44342 63.9307C-3.98683 65.521 -15.7504 62.0267 -24.0494 54.929C-14.6065 60.4138 -3.48077 62.2438 6.79843 60.1402C17.0776 58.0367 26.1657 52.0583 32.171 43.5906C38.1762 35.1228 40.8127 24.569 39.3984 14.1725C37.9841 3.77606 32.5776 -6.11844 24.2786 -13.2161Z"
          fill={colors[color]}
        />
      </svg>
    );
  };