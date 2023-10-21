/*
 * Copyright (C) 2023 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/goodtok
 *
 * This file is part of Goodtok
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState } from "react";

export function CircleMicrophoneIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const circleColor = isHovered ? "#FFFFFF" : "#B7B7B7";

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g filter="url(#filter0_b_1101_87613)">
        <circle cx="20" cy="20" r="20" fill={circleColor} fill-opacity="0.5" />
      </g>
      <path
        d="M20 22C19.1667 22 18.4583 21.7083 17.875 21.125C17.2917 20.5417 17 19.8333 17 19V13C17 12.1667 17.2917 11.4583 17.875 10.875C18.4583 10.2917 19.1667 10 20 10C20.8333 10 21.5417 10.2917 22.125 10.875C22.7083 11.4583 23 12.1667 23 13V19C23 19.8333 22.7083 20.5417 22.125 21.125C21.5417 21.7083 20.8333 22 20 22ZM19 29V25.925C17.2667 25.6917 15.8333 24.9167 14.7 23.6C13.5667 22.2833 13 20.75 13 19H15C15 20.3833 15.4875 21.5625 16.4625 22.5375C17.4375 23.5125 18.6167 24 20 24C21.3833 24 22.5625 23.5125 23.5375 22.5375C24.5125 21.5625 25 20.3833 25 19H27C27 20.75 26.4333 22.2833 25.3 23.6C24.1667 24.9167 22.7333 25.6917 21 25.925V29H19ZM20 20C20.2833 20 20.5208 19.9042 20.7125 19.7125C20.9042 19.5208 21 19.2833 21 19V13C21 12.7167 20.9042 12.4792 20.7125 12.2875C20.5208 12.0958 20.2833 12 20 12C19.7167 12 19.4792 12.0958 19.2875 12.2875C19.0958 12.4792 19 12.7167 19 13V19C19 19.2833 19.0958 19.5208 19.2875 19.7125C19.4792 19.9042 19.7167 20 20 20Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_b_1101_87613"
          x="-10"
          y="-10"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1101_87613"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1101_87613"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
