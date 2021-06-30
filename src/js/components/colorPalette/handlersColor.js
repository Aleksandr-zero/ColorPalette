export default {
	/**
	* @from https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
	* @from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	* @from http://www.easyrgb.com/en/math.php#text1
	*/

	HSVtoRGB(H, S, V) {
		/** accepts parameters
		 * @param h Object = { h:x, s:y, v:z }
		 * OR
		 * @param h, s, v
		*/

		let R, G, B, i, f, p, q, t;

        if (arguments.length === 1) S = H.S, V = H.V, H = H.H;

        i = Math.floor(H * 6);
        f = H * 6 - i;
        p = V * (1 - S);
        q = V * (1 - f * S);
        t = V * (1 - (1 - f) * S);

        switch (i % 6) {
            case 0: R = V, G = t, B = p; break;
            case 1: R = q, G = V, B = p; break;
            case 2: R = p, G = V, B = t; break;
            case 3: R = p, G = q, B = V; break;
            case 4: R = t, G = p, B = V; break;
            case 5: R = V, G = p, B = q; break;
        };

        return {
            r: Math.round(R * 255),
            g: Math.round(G * 255),
            b: Math.round(B * 255)
        };
	},

	RGBtoHSV(r, g, b) {
		/*
		R, G and B input range = 0 ÷ 255
		H, S and V output range = 0 ÷ 1.0
		*/

		const var_R = ( r / 255 );
		const var_G = ( g / 255 );
		const var_B = ( b / 255 );

		const var_Min = Math.min( var_R, var_G, var_B );
		const var_Max = Math.max( var_R, var_G, var_B );
		const del_Max = var_Max - var_Min;

		let V = var_Max;
		let H, S;

		if ( del_Max === 0 ) {
			H = 0;
			S = 0;
		} else {
			S = del_Max / var_Max;

			const del_R = ( ( ( var_Max - var_R ) / 6 ) + ( del_Max / 2 ) ) / del_Max;
			const del_G = ( ( ( var_Max - var_G ) / 6 ) + ( del_Max / 2 ) ) / del_Max;
			const del_B = ( ( ( var_Max - var_B ) / 6 ) + ( del_Max / 2 ) ) / del_Max;

			if      ( var_R === var_Max ) H = del_B - del_G;
			else if ( var_G === var_Max ) H = ( 1 / 3 ) + del_R - del_B;
			else if ( var_B === var_Max ) H = ( 2 / 3 ) + del_G - del_R;

			if ( H < 0 ) H += 1;
			if ( H > 1 ) H -= 1;
		};

		return { h: H, s: S, v: V };
	},

	hexToRgb(hex) {
		// Преобразовывает (нап. "03F") в полный формат (нап. "0033FF")
		return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
				'#' + r + r + g + g + b + b
			})
			.substring(1).match(/.{2}/g)
			.map(x => parseInt(x, 16))
	},

	rgbToHex(r, g, b) {
		return '#' + [r, g, b].map((x) => {
			return x.toString(16).padStart(2, '0');
		}).join('');
	},
};
