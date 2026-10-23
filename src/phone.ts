export namespace Phone {
  export interface CountryCode {
    id: string
    code: string
    name: string
    flag: string
  }

  export const COUNTRY_CODES: CountryCode[] = [
    { id: "AF", code: "+93", name: "Afghanistan", flag: "🇦🇫" },
    { id: "AL", code: "+355", name: "Albania", flag: "🇦🇱" },
    { id: "DZ", code: "+213", name: "Algeria", flag: "🇩🇿" },
    { id: "AS", code: "+1684", name: "American Samoa", flag: "🇦🇸" },
    { id: "AD", code: "+376", name: "Andorra", flag: "🇦🇩" },
    { id: "AO", code: "+244", name: "Angola", flag: "🇦🇴" },
    { id: "AI", code: "+1264", name: "Anguilla", flag: "🇦🇮" },
    { id: "AQ", code: "+672", name: "Antarctica", flag: "🇦🇶" },
    { id: "AR", code: "+54", name: "Argentina", flag: "🇦🇷" },
    { id: "AM", code: "+374", name: "Armenia", flag: "🇦🇲" },
    { id: "AW", code: "+297", name: "Aruba", flag: "🇦🇼" },
    { id: "AU", code: "+61", name: "Australia", flag: "🇦🇺" },
    { id: "AT", code: "+43", name: "Austria", flag: "🇦🇹" },
    { id: "AZ", code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
    { id: "BS", code: "+1242", name: "Bahamas", flag: "🇧🇸" },
    { id: "BH", code: "+973", name: "Bahrain", flag: "🇧🇭" },
    { id: "BD", code: "+880", name: "Bangladesh", flag: "🇧🇩" },
    { id: "BB", code: "+1246", name: "Barbados", flag: "🇧🇧" },
    { id: "BY", code: "+375", name: "Belarus", flag: "🇧🇾" },
    { id: "BE", code: "+32", name: "Belgium", flag: "🇧🇪" },
    { id: "BZ", code: "+501", name: "Belize", flag: "🇧🇿" },
    { id: "BJ", code: "+229", name: "Benin", flag: "🇧🇯" },
    { id: "BT", code: "+975", name: "Bhutan", flag: "🇧🇹" },
    { id: "BO", code: "+591", name: "Bolivia", flag: "🇧🇴" },
    { id: "BA", code: "+387", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
    { id: "BW", code: "+267", name: "Botswana", flag: "🇧🇼" },
    { id: "BR", code: "+55", name: "Brazil", flag: "🇧🇷" },
    { id: "VG", code: "+1284", name: "British Virgin Islands", flag: "🇻🇬" },
    { id: "BN", code: "+673", name: "Brunei Darussalam", flag: "🇧🇳" },
    { id: "BG", code: "+359", name: "Bulgaria", flag: "🇧🇬" },
    { id: "BF", code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
    { id: "BI", code: "+257", name: "Burundi", flag: "🇧🇮" },
    { id: "KH", code: "+855", name: "Cambodia", flag: "🇰🇭" },
    { id: "CM", code: "+237", name: "Cameroon", flag: "🇨🇲" },
    { id: "CA", code: "+1", name: "Canada", flag: "🇨🇦" },
    { id: "CV", code: "+238", name: "Cape Verde", flag: "🇨🇻" },
    { id: "KY", code: "+1345", name: "Cayman Islands", flag: "🇰🇾" },
    { id: "CF", code: "+236", name: "Central African Republic", flag: "🇨🇫" },
    { id: "CL", code: "+56", name: "Chile", flag: "🇨🇱" },
    { id: "CN", code: "+86", name: "China", flag: "🇨🇳" },
    { id: "CX", code: "+61", name: "Christmas Island", flag: "🇨🇽" },
    { id: "CC", code: "+61", name: "Cocos Islands", flag: "🇨🇨" },
    { id: "CO", code: "+57", name: "Colombia", flag: "🇨🇴" },
    { id: "KM", code: "+269", name: "Comoros", flag: "🇰🇲" },
    { id: "CG", code: "+242", name: "Congo", flag: "🇨🇬" },
    { id: "CD", code: "+243", name: "Congo (Democratic Republic)", flag: "🇨🇩" },
    { id: "CK", code: "+682", name: "Cook Islands", flag: "🇨🇰" },
    { id: "CR", code: "+506", name: "Costa Rica", flag: "🇨🇷" },
    { id: "CI", code: "+225", name: "Ivory Coast", flag: "🇨🇮" },
    { id: "HR", code: "+385", name: "Croatia", flag: "🇭🇷" },
    { id: "CU", code: "+53", name: "Cuba", flag: "🇨🇺" },
    { id: "CW", code: "+599", name: "Curaçao", flag: "🇨🇼" },
    { id: "CY", code: "+357", name: "Cyprus", flag: "🇨🇾" },
    { id: "CZ", code: "+420", name: "Czech Republic", flag: "🇨🇿" },
    { id: "DK", code: "+45", name: "Denmark", flag: "🇩🇰" },
    { id: "DJ", code: "+253", name: "Djibouti", flag: "🇩🇯" },
    { id: "DM", code: "+1767", name: "Dominica", flag: "🇩🇲" },
    { id: "DO", code: "+1849", name: "Dominican Republic", flag: "🇩🇴" },
    { id: "TL", code: "+670", name: "East Timor", flag: "🇹🇱" },
    { id: "EC", code: "+593", name: "Ecuador", flag: "🇪🇨" },
    { id: "EG", code: "+20", name: "Egypt", flag: "🇪🇬" },
    { id: "SV", code: "+503", name: "El Salvador", flag: "🇸🇻" },
    { id: "GQ", code: "+240", name: "Equatorial Guinea", flag: "🇬🇶" },
    { id: "ER", code: "+291", name: "Eritrea", flag: "🇪🇷" },
    { id: "EE", code: "+372", name: "Estonia", flag: "🇪🇪" },
    { id: "ET", code: "+251", name: "Ethiopia", flag: "🇪🇹" },
    { id: "FK", code: "+500", name: "Falkland Islands", flag: "🇫🇰" },
    { id: "FO", code: "+298", name: "Faroe Islands", flag: "🇫🇴" },
    { id: "FJ", code: "+679", name: "Fiji", flag: "🇫🇯" },
    { id: "FI", code: "+358", name: "Finland", flag: "🇫🇮" },
    { id: "FR", code: "+33", name: "France", flag: "🇫🇷" },
    { id: "GF", code: "+594", name: "French Guiana", flag: "🇬🇫" },
    { id: "PF", code: "+689", name: "French Polynesia", flag: "🇵🇫" },
    { id: "GA", code: "+241", name: "Gabon", flag: "🇬🇦" },
    { id: "GM", code: "+220", name: "Gambia", flag: "🇬🇲" },
    { id: "GE", code: "+995", name: "Georgia", flag: "🇬🇪" },
    { id: "DE", code: "+49", name: "Germany", flag: "🇩🇪" },
    { id: "GH", code: "+233", name: "Ghana", flag: "🇬🇭" },
    { id: "GI", code: "+350", name: "Gibraltar", flag: "🇬🇮" },
    { id: "GR", code: "+30", name: "Greece", flag: "🇬🇷" },
    { id: "GL", code: "+299", name: "Greenland", flag: "🇬🇱" },
    { id: "GD", code: "+1473", name: "Grenada", flag: "🇬🇩" },
    { id: "GT", code: "+502", name: "Guatemala", flag: "🇬🇹" },
    { id: "GN", code: "+224", name: "Guinea", flag: "🇬🇳" },
    { id: "GW", code: "+245", name: "Guinea-Bissau", flag: "🇬🇼" },
    { id: "PY", code: "+595", name: "Paraguay", flag: "🇵🇾" },
    { id: "HT", code: "+509", name: "Haiti", flag: "🇭🇹" },
    { id: "HN", code: "+504", name: "Honduras", flag: "🇭🇳" },
    { id: "HK", code: "+852", name: "Hong Kong", flag: "🇭🇰" },
    { id: "HU", code: "+36", name: "Hungary", flag: "🇭🇺" },
    { id: "IS", code: "+354", name: "Iceland", flag: "🇮🇸" },
    { id: "IN", code: "+91", name: "India", flag: "🇮🇳" },
    { id: "ID", code: "+62", name: "Indonesia", flag: "🇮🇩" },
    { id: "IR", code: "+98", name: "Iran", flag: "🇮🇷" },
    { id: "IQ", code: "+964", name: "Iraq", flag: "🇮🇶" },
    { id: "IE", code: "+353", name: "Ireland", flag: "🇮🇪" },
    { id: "IL", code: "+972", name: "Israel", flag: "🇮🇱" },
    { id: "IT", code: "+39", name: "Italy", flag: "🇮🇹" },
    { id: "JM", code: "+1", name: "Jamaica", flag: "🇯🇲" },
    { id: "JP", code: "+81", name: "Japan", flag: "🇯🇵" },
    { id: "JO", code: "+962", name: "Jordan", flag: "🇯🇴" },
    { id: "KZ", code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
    { id: "KE", code: "+254", name: "Kenya", flag: "🇰🇪" },
    { id: "KI", code: "+686", name: "Kiribati", flag: "🇰🇮" },
    { id: "KW", code: "+965", name: "Kuwait", flag: "🇰🇼" },
    { id: "KG", code: "+996", name: "Kyrgyzstan", flag: "🇰🇬" },
    { id: "LA", code: "+856", name: "Laos", flag: "🇱🇦" },
    { id: "LV", code: "+371", name: "Latvia", flag: "🇱🇻" },
    { id: "LB", code: "+961", name: "Lebanon", flag: "🇱🇧" },
    { id: "LS", code: "+266", name: "Lesotho", flag: "🇱🇸" },
    { id: "LR", code: "+231", name: "Liberia", flag: "🇱🇷" },
    { id: "LY", code: "+218", name: "Libya", flag: "🇱🇾" },
    { id: "LI", code: "+423", name: "Liechtenstein", flag: "🇱🇮" },
    { id: "LT", code: "+370", name: "Lithuania", flag: "🇱🇹" },
    { id: "LU", code: "+352", name: "Luxembourg", flag: "🇱🇺" },
    { id: "MO", code: "+853", name: "Macau", flag: "🇲🇴" },
    { id: "MK", code: "+389", name: "Macedonia", flag: "🇲🇰" },
    { id: "MG", code: "+261", name: "Madagascar", flag: "🇲🇬" },
    { id: "MW", code: "+265", name: "Malawi", flag: "🇲🇼" },
    { id: "MY", code: "+60", name: "Malaysia", flag: "🇲🇾" },
    { id: "MV", code: "+960", name: "Maldives", flag: "🇲🇻" },
    { id: "ML", code: "+223", name: "Mali", flag: "🇲🇱" },
    { id: "MT", code: "+356", name: "Malta", flag: "🇲🇹" },
    { id: "MH", code: "+692", name: "Marshall Islands", flag: "🇲🇭" },
    { id: "MQ", code: "+596", name: "Martinique", flag: "🇲🇶" },
    { id: "MR", code: "+222", name: "Mauritania", flag: "🇲🇷" },
    { id: "MU", code: "+230", name: "Mauritius", flag: "🇲🇺" },
    { id: "YT", code: "+262", name: "Mayotte", flag: "🇾🇹" },
    { id: "MX", code: "+52", name: "Mexico", flag: "🇲🇽" },
    { id: "FM", code: "+691", name: "Micronesia", flag: "🇫🇲" },
    { id: "MD", code: "+373", name: "Moldova", flag: "🇲🇩" },
    { id: "MC", code: "+377", name: "Monaco", flag: "🇲🇨" },
    { id: "MN", code: "+976", name: "Mongolia", flag: "🇲🇳" },
    { id: "ME", code: "+382", name: "Montenegro", flag: "🇲🇪" },
    { id: "MS", code: "+1664", name: "Montserrat", flag: "🇲🇸" },
    { id: "MA", code: "+212", name: "Morocco", flag: "🇲🇦" },
    { id: "MZ", code: "+258", name: "Mozambique", flag: "🇲🇿" },
    { id: "MM", code: "+95", name: "Myanmar", flag: "🇲🇲" },
    { id: "NA", code: "+264", name: "Namibia", flag: "🇳🇦" },
    { id: "NR", code: "+674", name: "Nauru", flag: "🇳🇷" },
    { id: "NP", code: "+977", name: "Nepal", flag: "🇳🇵" },
    { id: "NL", code: "+31", name: "Netherlands", flag: "🇳🇱" },
    { id: "NZ", code: "+64", name: "New Zealand", flag: "🇳🇿" },
    { id: "NI", code: "+505", name: "Nicaragua", flag: "🇳🇮" },
    { id: "NE", code: "+227", name: "Niger", flag: "🇳🇪" },
    { id: "NG", code: "+234", name: "Nigeria", flag: "🇳🇬" },
    { id: "NU", code: "+683", name: "Niue", flag: "🇳🇺" },
    { id: "KP", code: "+850", name: "North Korea", flag: "🇰🇵" },
    { id: "NO", code: "+47", name: "Norway", flag: "🇳🇴" },
    { id: "OM", code: "+968", name: "Oman", flag: "🇴🇲" },
    { id: "PK", code: "+92", name: "Pakistan", flag: "🇵🇰" },
    { id: "PW", code: "+680", name: "Palau", flag: "🇵🇼" },
    { id: "PS", code: "+970", name: "Palestinian Territory", flag: "🇵🇸" },
    { id: "PA", code: "+507", name: "Panama", flag: "🇵🇦" },
    { id: "PG", code: "+675", name: "Papua New Guinea", flag: "🇵🇬" },
    { id: "PE", code: "+51", name: "Peru", flag: "🇵🇪" },
    { id: "PH", code: "+63", name: "Philippines", flag: "🇵🇭" },
    { id: "PL", code: "+48", name: "Poland", flag: "🇵🇱" },
    { id: "PT", code: "+351", name: "Portugal", flag: "🇵🇹" },
    { id: "PR", code: "+1", name: "Puerto Rico", flag: "🇵🇷" },
    { id: "QA", code: "+974", name: "Qatar", flag: "🇶🇦" },
    { id: "RO", code: "+40", name: "Romania", flag: "🇷🇴" },
    { id: "RU", code: "+7", name: "Russia", flag: "🇷🇺" },
    { id: "RW", code: "+250", name: "Rwanda", flag: "🇷🇼" },
    { id: "WS", code: "+685", name: "Samoa", flag: "🇼🇸" },
    { id: "SM", code: "+378", name: "San Marino", flag: "🇸🇲" },
    { id: "ST", code: "+239", name: "São Tomé and Príncipe", flag: "🇸🇹" },
    { id: "SA", code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
    { id: "SN", code: "+221", name: "Senegal", flag: "🇸🇳" },
    { id: "RS", code: "+381", name: "Serbia", flag: "🇷🇸" },
    { id: "SC", code: "+248", name: "Seychelles", flag: "🇸🇨" },
    { id: "SL", code: "+232", name: "Sierra Leone", flag: "🇸🇱" },
    { id: "SG", code: "+65", name: "Singapore", flag: "🇸🇬" },
    { id: "SK", code: "+421", name: "Slovakia", flag: "🇸🇰" },
    { id: "SI", code: "+386", name: "Slovenia", flag: "🇸🇮" },
    { id: "SB", code: "+677", name: "Solomon Islands", flag: "🇸🇧" },
    { id: "SO", code: "+252", name: "Somalia", flag: "🇸🇴" },
    { id: "ZA", code: "+27", name: "South Africa", flag: "🇿🇦" },
    { id: "KR", code: "+82", name: "South Korea", flag: "🇰🇷" },
    { id: "ES", code: "+34", name: "Spain", flag: "🇪🇸" },
    { id: "LK", code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
    { id: "SD", code: "+249", name: "Sudan", flag: "🇸🇩" },
    { id: "SR", code: "+597", name: "Suriname", flag: "🇸🇷" },
    { id: "SJ", code: "+47", name: "Svalbard and Jan Mayen", flag: "🇸🇯" },
    { id: "SZ", code: "+268", name: "Eswatini", flag: "🇸🇿" },
    { id: "SE", code: "+46", name: "Sweden", flag: "🇸🇪" },
    { id: "CH", code: "+41", name: "Switzerland", flag: "🇨🇭" },
    { id: "SY", code: "+963", name: "Syria", flag: "🇸🇾" },
    { id: "TW", code: "+886", name: "Taiwan", flag: "🇹🇼" },
    { id: "TJ", code: "+992", name: "Tajikistan", flag: "🇹🇯" },
    { id: "TZ", code: "+255", name: "Tanzania", flag: "🇹🇿" },
    { id: "TH", code: "+66", name: "Thailand", flag: "🇹🇭" },
    { id: "TG", code: "+228", name: "Togo", flag: "🇹🇬" },
    { id: "TK", code: "+690", name: "Tokelau", flag: "🇹🇰" },
    { id: "TO", code: "+676", name: "Tonga", flag: "🇹🇴" },
    { id: "TT", code: "+1868", name: "Trinidad and Tobago", flag: "🇹🇹" },
    { id: "TN", code: "+216", name: "Tunisia", flag: "🇹🇳" },
    { id: "TR", code: "+90", name: "Turkey", flag: "🇹🇷" },
    { id: "TM", code: "+993", name: "Turkmenistan", flag: "🇹🇲" },
    { id: "TC", code: "+1", name: "Turks and Caicos Islands", flag: "🇹🇨" },
    { id: "TV", code: "+688", name: "Tuvalu", flag: "🇹🇻" },
    { id: "UG", code: "+256", name: "Uganda", flag: "🇺🇬" },
    { id: "UA", code: "+380", name: "Ukraine", flag: "🇺🇦" },
    { id: "AE", code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
    { id: "GB", code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { id: "US", code: "+1", name: "United States", flag: "🇺🇸" },
    { id: "UY", code: "+598", name: "Uruguay", flag: "🇺🇾" },
    { id: "UZ", code: "+998", name: "Uzbekistan", flag: "🇺🇿" },
    { id: "VU", code: "+678", name: "Vanuatu", flag: "🇻🇺" },
    { id: "VA", code: "+379", name: "Vatican City", flag: "🇻🇦" },
    { id: "VE", code: "+58", name: "Venezuela", flag: "🇻🇪" },
    { id: "VN", code: "+84", name: "Vietnam", flag: "🇻🇳" },
    { id: "WF", code: "+1", name: "Wallis and Futuna", flag: "🇼🇫" },
    { id: "YE", code: "+967", name: "Yemen", flag: "🇾🇪" },
    { id: "ZM", code: "+260", name: "Zambia", flag: "🇿🇲" },
    { id: "ZW", code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
  ]

  export type Code =
    | "AC"
    | "AD"
    | "AE"
    | "AF"
    | "AG"
    | "AI"
    | "AL"
    | "AM"
    | "AO"
    | "AR"
    | "AS"
    | "AT"
    | "AU"
    | "AW"
    | "AX"
    | "AZ"
    | "BA"
    | "BB"
    | "BD"
    | "BE"
    | "BF"
    | "BG"
    | "BH"
    | "BI"
    | "BJ"
    | "BL"
    | "BM"
    | "BN"
    | "BO"
    | "BQ"
    | "BR"
    | "BS"
    | "BT"
    | "BW"
    | "BY"
    | "BZ"
    | "CA"
    | "CC"
    | "CD"
    | "CF"
    | "CG"
    | "CH"
    | "CI"
    | "CK"
    | "CL"
    | "CM"
    | "CN"
    | "CO"
    | "CR"
    | "CU"
    | "CV"
    | "CW"
    | "CX"
    | "CY"
    | "CZ"
    | "DE"
    | "DJ"
    | "DK"
    | "DM"
    | "DO"
    | "DZ"
    | "EC"
    | "EE"
    | "EG"
    | "EH"
    | "ER"
    | "ES"
    | "ET"
    | "FI"
    | "FJ"
    | "FK"
    | "FM"
    | "FO"
    | "FR"
    | "GA"
    | "GB"
    | "GD"
    | "GE"
    | "GF"
    | "GG"
    | "GH"
    | "GI"
    | "GL"
    | "GM"
    | "GN"
    | "GP"
    | "GQ"
    | "GR"
    | "GT"
    | "GU"
    | "GW"
    | "GY"
    | "HK"
    | "HN"
    | "HR"
    | "HT"
    | "HU"
    | "ID"
    | "IE"
    | "IL"
    | "IM"
    | "IN"
    | "IO"
    | "IQ"
    | "IR"
    | "IS"
    | "IT"
    | "JE"
    | "JM"
    | "JO"
    | "JP"
    | "KE"
    | "KG"
    | "KH"
    | "KI"
    | "KM"
    | "KN"
    | "KP"
    | "KR"
    | "KW"
    | "KY"
    | "KZ"
    | "LA"
    | "LB"
    | "LC"
    | "LI"
    | "LK"
    | "LR"
    | "LS"
    | "LT"
    | "LU"
    | "LV"
    | "LY"
    | "MA"
    | "MC"
    | "MD"
    | "ME"
    | "MF"
    | "MG"
    | "MH"
    | "MK"
    | "ML"
    | "MM"
    | "MN"
    | "MO"
    | "MP"
    | "MQ"
    | "MR"
    | "MS"
    | "MT"
    | "MU"
    | "MV"
    | "MW"
    | "MX"
    | "MY"
    | "MZ"
    | "NA"
    | "NC"
    | "NE"
    | "NF"
    | "NG"
    | "NI"
    | "NL"
    | "NO"
    | "NP"
    | "NR"
    | "NU"
    | "NZ"
    | "OM"
    | "PA"
    | "PE"
    | "PF"
    | "PG"
    | "PH"
    | "PK"
    | "PL"
    | "PM"
    | "PR"
    | "PS"
    | "PT"
    | "PW"
    | "PY"
    | "QA"
    | "RE"
    | "RO"
    | "RS"
    | "RU"
    | "RW"
    | "SA"
    | "SB"
    | "SC"
    | "SD"
    | "SE"
    | "SG"
    | "SH"
    | "SI"
    | "SJ"
    | "SK"
    | "SL"
    | "SM"
    | "SN"
    | "SO"
    | "SR"
    | "SS"
    | "ST"
    | "SV"
    | "SX"
    | "SY"
    | "SZ"
    | "TA"
    | "TC"
    | "TD"
    | "TG"
    | "TH"
    | "TJ"
    | "TK"
    | "TL"
    | "TM"
    | "TN"
    | "TO"
    | "TR"
    | "TT"
    | "TV"
    | "TW"
    | "TZ"
    | "UA"
    | "UG"
    | "US"
    | "UY"
    | "UZ"
    | "VA"
    | "VC"
    | "VE"
    | "VG"
    | "VI"
    | "VN"
    | "VU"
    | "WF"
    | "WS"
    | "XK"
    | "YE"
    | "YT"
    | "ZA"
    | "ZM"
    | "ZW"

  export const DIAL_CODES: Record<Code, string> = {
    AC: "247",
    AD: "376",
    AE: "971",
    AF: "93",
    AG: "1",
    AI: "1",
    AL: "355",
    AM: "374",
    AO: "244",
    AR: "54",
    AS: "1",
    AT: "43",
    AU: "61",
    AW: "297",
    AX: "358",
    AZ: "994",
    BA: "387",
    BB: "1",
    BD: "880",
    BE: "32",
    BF: "226",
    BG: "359",
    BH: "973",
    BI: "257",
    BJ: "229",
    BL: "590",
    BM: "1",
    BN: "673",
    BO: "591",
    BQ: "599",
    BR: "55",
    BS: "1",
    BT: "975",
    BW: "267",
    BY: "375",
    BZ: "501",
    CA: "1",
    CC: "61",
    CD: "243",
    CF: "236",
    CG: "242",
    CH: "41",
    CI: "225",
    CK: "682",
    CL: "56",
    CM: "237",
    CN: "86",
    CO: "57",
    CR: "506",
    CU: "53",
    CV: "238",
    CW: "599",
    CX: "61",
    CY: "357",
    CZ: "420",
    DE: "49",
    DJ: "253",
    DK: "45",
    DM: "1",
    DO: "1",
    DZ: "213",
    EC: "593",
    EE: "372",
    EG: "20",
    EH: "212",
    ER: "291",
    ES: "34",
    ET: "251",
    FI: "358",
    FJ: "679",
    FK: "500",
    FM: "691",
    FO: "298",
    FR: "33",
    GA: "241",
    GB: "44",
    GD: "1",
    GE: "995",
    GF: "594",
    GG: "44",
    GH: "233",
    GI: "350",
    GL: "299",
    GM: "220",
    GN: "224",
    GP: "590",
    GQ: "240",
    GR: "30",
    GT: "502",
    GU: "1",
    GW: "245",
    GY: "592",
    HK: "852",
    HN: "504",
    HR: "385",
    HT: "509",
    HU: "36",
    ID: "62",
    IE: "353",
    IL: "972",
    IM: "44",
    IN: "91",
    IO: "246",
    IQ: "964",
    IR: "98",
    IS: "354",
    IT: "39",
    JE: "44",
    JM: "1",
    JO: "962",
    JP: "81",
    KE: "254",
    KG: "996",
    KH: "855",
    KI: "686",
    KM: "269",
    KN: "1",
    KP: "850",
    KR: "82",
    KW: "965",
    KY: "1",
    KZ: "7",
    LA: "856",
    LB: "961",
    LC: "1",
    LI: "423",
    LK: "94",
    LR: "231",
    LS: "266",
    LT: "370",
    LU: "352",
    LV: "371",
    LY: "218",
    MA: "212",
    MC: "377",
    MD: "373",
    ME: "382",
    MF: "590",
    MG: "261",
    MH: "692",
    MK: "389",
    ML: "223",
    MM: "95",
    MN: "976",
    MO: "853",
    MP: "1",
    MQ: "596",
    MR: "222",
    MS: "1",
    MT: "356",
    MU: "230",
    MV: "960",
    MW: "265",
    MX: "52",
    MY: "60",
    MZ: "258",
    NA: "264",
    NC: "687",
    NE: "227",
    NF: "672",
    NG: "234",
    NI: "505",
    NL: "31",
    NO: "47",
    NP: "977",
    NR: "674",
    NU: "683",
    NZ: "64",
    OM: "968",
    PA: "507",
    PE: "51",
    PF: "689",
    PG: "675",
    PH: "63",
    PK: "92",
    PL: "48",
    PM: "508",
    PR: "1",
    PS: "970",
    PT: "351",
    PW: "680",
    PY: "595",
    QA: "974",
    RE: "262",
    RO: "40",
    RS: "381",
    RU: "7",
    RW: "250",
    SA: "966",
    SB: "677",
    SC: "248",
    SD: "249",
    SE: "46",
    SG: "65",
    SH: "290",
    SI: "386",
    SJ: "47",
    SK: "421",
    SL: "232",
    SM: "378",
    SN: "221",
    SO: "252",
    SR: "597",
    SS: "211",
    ST: "239",
    SV: "503",
    SX: "1",
    SY: "963",
    SZ: "268",
    TA: "290",
    TC: "1",
    TD: "235",
    TG: "228",
    TH: "66",
    TJ: "992",
    TK: "690",
    TL: "670",
    TM: "993",
    TN: "216",
    TO: "676",
    TR: "90",
    TT: "1",
    TV: "688",
    TW: "886",
    TZ: "255",
    UA: "380",
    UG: "256",
    US: "1",
    UY: "598",
    UZ: "998",
    VA: "39",
    VC: "1",
    VE: "58",
    VG: "1",
    VI: "1",
    VN: "84",
    VU: "678",
    WF: "681",
    WS: "685",
    XK: "383",
    YE: "967",
    YT: "262",
    ZA: "27",
    ZM: "260",
    ZW: "263",
  }

  const GROUP_PATTERNS: Partial<Record<Code, number[][]>> = {
    AD: [
      [3, 3],
      [4, 4],
      [3, 3, 3],
    ],
    AE: [
      [3, 2],
      [3, 4],
      [3, 5],
      [2, 3, 4],
    ],
    AF: [[2, 3, 4]],
    AL: [
      [3, 3],
      [3, 4],
      [2, 3, 3],
      [3, 5],
      [2, 3, 4],
    ],
    AM: [
      [3, 2, 3],
      [3, 5],
      [2, 6],
    ],
    AO: [[3, 3, 3]],
    AR: [
      [4, 2, 4],
      [2, 4, 4],
      [3, 3, 4],
      [3, 3, 5],
    ],
    AT: [[3], [3, 2], [2, 3], [3, 3], [4, 3], [2, 3, 3], [2, 4, 4]],
    AU: [
      [2, 3],
      [2, 3, 2],
      [3, 3, 3],
      [4, 4],
      [4, 3, 3],
    ],
    AW: [[3, 4]],
    AZ: [
      [3, 2, 2, 2],
      [2, 3, 2, 2],
    ],
    BA: [
      [2, 3, 3],
      [2, 2, 2, 3],
    ],
    BD: [[2, 4], [3, 3], [4, 3], [7]],
    BE: [
      [3, 2, 3],
      [3, 2, 2],
      [2, 2, 2, 2],
      [3, 2, 2, 2],
    ],
    BF: [[2, 2, 2, 2]],
    BG: [
      [2, 2],
      [3, 4],
      [3, 3],
      [2, 3, 2],
      [3, 2, 3],
      [3, 3, 2],
      [2, 3, 3],
      [3, 3, 3],
    ],
    BH: [[4, 4]],
    BI: [[2, 2, 2, 2]],
    BJ: [
      [2, 2, 2, 2],
      [2, 2, 2, 2, 2],
    ],
    BN: [[3, 4]],
    BO: [[7], [8], [3, 2, 4]],
    BR: [
      [4, 4],
      [3, 2, 4],
      [2, 4, 4],
      [2, 5, 4],
    ],
    BT: [
      [3, 3],
      [2, 2, 2, 2],
    ],
    BW: [
      [2, 5],
      [3, 4],
      [2, 3, 3],
      [4, 3, 3],
      [3, 4, 3],
    ],
    BY: [
      [3, 3],
      [3, 2, 2],
      [4, 2, 3],
      [3, 2, 2, 2],
      [2, 3, 2, 2],
      [3, 3, 4],
    ],
    BZ: [
      [3, 4],
      [3, 4, 3],
    ],
    CD: [
      [2, 2, 3],
      [2, 5],
      [2, 2, 4],
      [2, 3, 4],
      [3, 3, 3],
      [2, 2, 3, 3],
    ],
    CF: [[2, 2, 2, 2]],
    CG: [
      [4, 4],
      [2, 3, 4],
    ],
    CH: [
      [3, 3, 3],
      [2, 3, 2, 2],
      [3, 2, 3, 2, 2],
    ],
    CI: [
      [2, 2, 5],
      [2, 2, 2, 4],
    ],
    CK: [[2, 3]],
    CL: [
      [5, 4],
      [3, 3, 3],
      [2, 3, 4],
      [4, 4],
      [4, 3, 4],
      [3, 3, 2, 3],
    ],
    CM: [[2, 2, 2, 2]],
    CN: [
      [2, 5],
      [3, 5],
      [3, 3, 4],
      [2, 4, 4],
      [3, 7],
      [4, 3, 4],
      [3, 4, 4],
      [2, 3, 3, 4],
    ],
    CO: [
      [4, 4],
      [3, 7],
    ],
    CR: [
      [4, 4],
      [3, 3, 4],
    ],
    CU: [[2, 4], [6], [7], [3, 7]],
    CV: [[3, 2, 2]],
    CW: [[3, 4]],
    CY: [[2, 6]],
    CZ: [
      [3, 3, 3],
      [2, 3, 3, 2],
      [2, 3, 3, 3],
      [3, 3, 3, 3],
    ],
    DE: [
      [2, 3],
      [3, 3],
      [4, 2],
      [3, 4],
      [5, 2],
      [3, 5],
      [3, 7],
      [5, 6],
      [3, 4, 4],
      [4, 7],
      [3, 8],
      [3, 2, 7],
      [4, 2, 7],
      [3, 2, 8],
    ],
    DJ: [[2, 2, 2, 2]],
    DK: [[2, 2, 2, 2]],
    DZ: [
      [2, 2, 2, 2],
      [2, 3, 2, 2],
      [3, 2, 2, 2],
    ],
    EC: [
      [3, 4],
      [2, 3, 4],
      [4, 3, 3],
    ],
    EE: [
      [3, 4],
      [4, 3],
      [2, 2, 4],
      [4, 3, 3],
    ],
    EG: [[7], [2, 6], [3, 3, 4], [2, 8]],
    ER: [[3, 3]],
    ES: [
      [3, 3, 3],
      [3, 2, 2, 2],
    ],
    ET: [[2, 3, 4]],
    FI: [[5], [3, 3], [2, 4], [2, 6], [4]],
    FJ: [
      [3, 4],
      [4, 3, 4],
    ],
    FM: [[3, 4]],
    FO: [[6]],
    FR: [
      [3, 2, 2, 2],
      [2, 2, 2, 2],
    ],
    GA: [
      [2, 2, 2],
      [2, 2, 2, 2],
    ],
    GB: [
      [3, 4],
      [3, 2, 2],
      [3, 6],
      [5, 4],
      [4, 5],
      [2, 4, 4],
      [4, 6],
      [3, 3, 4],
    ],
    GE: [
      [3, 3, 3],
      [2, 3, 2, 2],
      [3, 2, 2, 2],
    ],
    GF: [[3, 2, 2, 2]],
    GH: [
      [3, 5],
      [2, 3, 4],
    ],
    GI: [[3, 5]],
    GL: [[2, 2, 2]],
    GM: [[3, 4]],
    GN: [
      [2, 2, 2, 2],
      [3, 2, 2, 2],
    ],
    GP: [[3, 2, 2, 2]],
    GQ: [
      [3, 3, 3],
      [3, 6],
    ],
    GR: [
      [2, 4, 4],
      [4, 6],
      [3, 3, 4],
      [3, 3, 5],
    ],
    GT: [
      [4, 4],
      [4, 3, 4],
    ],
    GW: [
      [3, 4],
      [3, 3, 3],
    ],
    GY: [[3, 4]],
    HK: [
      [3, 2],
      [4, 4],
      [3, 3, 3],
      [3, 2, 3, 3],
    ],
    HN: [[4, 4]],
    HR: [
      [2, 2, 3],
      [3, 2, 2],
      [4, 3],
      [2, 3, 3],
      [3, 3, 3],
    ],
    HT: [[2, 2, 4]],
    HU: [
      [3, 4],
      [2, 3, 3],
    ],
    ID: [
      [3, 3],
      [2, 5],
      [3, 5],
      [3, 3, 3],
      [3, 6],
      [3, 3, 4],
      [3, 4, 4],
    ],
    IE: [
      [2, 5],
      [3, 5],
      [3, 4],
      [2, 3, 3],
      [3, 3, 3],
      [2, 3, 4],
      [4, 3, 3],
      [2, 4, 4],
    ],
    IL: [
      [4, 3],
      [4, 2, 2],
      [3, 4],
      [2, 3, 4],
      [4, 3, 3],
      [4, 6],
      [3, 3, 3],
      [3, 1, 3, 4],
    ],
    IN: [
      [8],
      [4, 4],
      [3, 3, 4],
      [2, 4, 4],
      [4, 3, 3],
      [5, 5],
      [4, 2, 4],
      [4, 3, 3, 3],
    ],
    IO: [[3, 4]],
    IQ: [
      [3, 4],
      [2, 3, 3],
      [3, 3, 4],
    ],
    IR: [[4], [2, 4], [3, 3, 3], [2, 4, 4]],
    IS: [
      [3, 4],
      [3, 3, 3],
    ],
    IT: [
      [2, 4],
      [3, 3],
      [4, 2],
      [4, 4],
      [2, 3, 4],
      [3, 3, 3],
      [3, 3, 4],
      [2, 4, 5],
      [4, 3, 4],
      [3, 4, 4],
    ],
    JO: [
      [3, 4],
      [3, 5],
      [2, 7],
      [4, 4],
    ],
    JP: [
      [2, 4, 4],
      [3, 3, 4],
      [1, 4, 4],
      [2, 3, 4],
      [3, 2, 4],
      [3, 3, 3],
    ],
    KE: [
      [2, 5],
      [3, 6],
      [3, 3, 3],
    ],
    KG: [
      [4, 5],
      [3, 3, 3],
      [3, 3, 2],
    ],
    KH: [
      [2, 3, 3],
      [4, 3, 3],
    ],
    KM: [[3, 2, 2]],
    KP: [
      [2, 3, 3],
      [3, 4],
      [3, 3, 4],
    ],
    KR: [
      [2, 3],
      [4, 4],
      [3, 4],
      [2, 3, 4],
      [2, 4, 4],
      [2, 5, 4],
    ],
    KW: [
      [4, 3],
      [3, 5],
    ],
    LA: [
      [2, 3, 3],
      [2, 2, 2, 3],
      [2, 2, 3, 3],
    ],
    LB: [
      [3, 3],
      [2, 3, 3],
    ],
    LI: [
      [3, 2, 2],
      [3, 3, 3],
      [2, 3, 4],
    ],
    LK: [
      [2, 3, 4],
      [3, 3, 3],
    ],
    LR: [
      [3, 3],
      [2, 3, 3],
      [2, 3, 4],
    ],
    LS: [[4, 4]],
    LT: [
      [3, 4],
      [3, 2, 3],
      [2, 6],
      [3, 5],
    ],
    LU: [
      [2, 3],
      [2, 2, 2],
      [2, 2, 3],
      [2, 2, 2, 1],
      [3, 2, 3],
      [2, 2, 2, 3],
      [3, 3, 3],
      [2, 2, 2, 2, 1],
    ],
    LV: [[2, 3, 3]],
    LY: [[2, 7]],
    MA: [
      [4, 5],
      [2, 7],
      [2, 2, 2, 2],
    ],
    MC: [
      [2, 3, 3],
      [2, 2, 2, 2],
    ],
    MD: [
      [3, 5],
      [2, 3, 3],
      [3, 2, 3],
    ],
    ME: [[2, 3, 3]],
    MG: [[2, 2, 3, 2]],
    MH: [[3, 4]],
    MK: [
      [3, 4],
      [2, 3, 3],
      [3, 2, 2],
    ],
    ML: [[2, 2, 2, 2]],
    MM: [
      [2, 3],
      [2, 2, 3],
      [3, 3],
      [2, 3, 3],
      [3, 4],
      [4, 4],
      [3, 3, 4],
      [3, 3, 3],
      [5, 4],
    ],
    MN: [
      [2, 2, 4],
      [4, 4],
      [3, 5],
      [4, 5],
      [5, 4],
    ],
    MO: [
      [4, 3],
      [4, 4],
    ],
    MQ: [[3, 2, 2, 2]],
    MR: [[2, 2, 2, 2]],
    MT: [[4, 4]],
    MU: [
      [3, 4],
      [4, 4],
      [5, 5],
    ],
    MV: [
      [3, 4],
      [3, 3, 4],
    ],
    MW: [
      [3, 3],
      [3, 3, 3],
      [3, 2, 2, 2],
    ],
    MX: [
      [2, 4, 4],
      [3, 3, 4],
    ],
    MY: [
      [3, 4],
      [2, 3, 3],
      [4, 4],
      [3, 2, 4],
      [3, 3, 4],
      [2, 4, 4],
    ],
    MZ: [
      [2, 3, 3],
      [3, 3, 3],
    ],
    NA: [
      [2, 3, 3],
      [3, 3, 3],
      [2, 3, 4],
    ],
    NC: [[2, 2, 2]],
    NE: [
      [2, 3, 3],
      [2, 2, 2, 2],
    ],
    NF: [[2, 4], [5]],
    NG: [
      [3, 3, 3],
      [3, 3, 4],
      [4, 2, 4],
      [3, 4, 4],
      [3, 5, 5],
    ],
    NI: [[4, 4]],
    NL: [[3, 4], [2, 7], [8], [3, 3, 3], [2, 3, 4], [3, 3, 5]],
    NO: [
      [3, 2, 3],
      [2, 2, 2, 2],
    ],
    NP: [[7], [2, 6], [3, 7]],
    NR: [[3, 4]],
    NU: [[3, 4]],
    NZ: [
      [2, 3],
      [3, 2, 2],
      [3, 4],
      [3, 3, 3],
      [2, 3, 4],
      [2, 3, 3],
    ],
    OM: [
      [3, 4],
      [2, 6],
      [4, 4],
    ],
    PA: [
      [3, 4],
      [4, 4],
      [3, 3, 4],
    ],
    PE: [[3, 5], [7], [2, 6], [3, 3, 3]],
    PF: [
      [2, 2, 2],
      [2, 2, 2, 2],
      [3, 2, 2, 2],
    ],
    PG: [
      [3, 4],
      [4, 4],
    ],
    PH: [[5], [4, 4], [5, 4], [2, 3, 4], [3, 3, 4], [4, 3, 4], [4, 1, 3, 4]],
    PK: [
      [3, 3, 2],
      [4, 5],
      [3, 6],
      [2, 7],
      [5, 5],
      [3, 7],
      [2, 3, 3, 3],
      [3, 3, 3, 3],
    ],
    PL: [[5], [3, 3], [2, 2, 3], [3, 2, 2], [3, 3, 3], [2, 3, 2, 2]],
    PM: [
      [2, 2, 2],
      [3, 3, 3],
      [3, 2, 2, 2],
    ],
    PS: [
      [3, 4],
      [3, 3, 3],
      [4, 3, 3],
    ],
    PT: [
      [2, 3, 4],
      [3, 3, 3],
    ],
    PW: [[3, 4]],
    PY: [
      [3, 3],
      [2, 5],
      [3, 4],
      [2, 3, 3],
      [2, 3, 4],
      [3, 6],
      [3, 3, 3],
      [4, 3, 4],
    ],
    QA: [
      [3, 4],
      [4, 4],
    ],
    RE: [[3, 2, 2, 2]],
    RO: [
      [3, 3],
      [2, 4],
      [2, 3, 4],
      [3, 3, 3],
    ],
    RS: [
      [3, 3],
      [2, 5],
    ],
    RU: [
      [4, 2, 2, 2],
      [5, 2, 2],
      [3, 3, 4],
      [3, 3, 2, 2],
      [4, 4, 3, 3],
    ],
    RW: [
      [2, 2, 2, 2],
      [3, 3, 3],
    ],
    SA: [
      [4, 5],
      [2, 3, 4],
      [3, 3, 4],
    ],
    SB: [[2, 5]],
    SC: [[3, 3]],
    SD: [[2, 3, 4]],
    SE: [
      [2, 2, 2],
      [3, 4],
      [2, 3, 2],
      [3, 2, 2],
      [3, 2, 3],
      [2, 2, 2, 2],
      [2, 3, 2, 2],
      [3, 3, 2],
      [3, 2, 2, 2],
      [3, 2, 2, 3],
      [3, 2, 3, 2, 2],
    ],
    SG: [
      [4, 4],
      [3, 3, 4],
      [4, 4, 3],
      [4, 3, 4],
    ],
    SI: [
      [2, 3],
      [3, 5],
      [2, 3, 3],
      [3, 2, 2],
    ],
    SK: [
      [2, 3],
      [2, 2, 2],
      [3, 3, 2],
      [3, 3, 3],
      [2, 3, 2, 2],
    ],
    SL: [[2, 6]],
    SM: [
      [2, 2, 2, 2],
      [4, 6],
    ],
    SN: [
      [3, 2, 2, 2],
      [2, 3, 2, 2],
    ],
    SO: [[2, 4], [6], [7], [3, 3, 3], [2, 5]],
    SR: [
      [2, 2, 2],
      [3, 3],
      [3, 4],
    ],
    SS: [[3, 3, 3]],
    ST: [[3, 4]],
    SV: [
      [3, 4],
      [4, 4],
      [3, 4, 4],
    ],
    SY: [
      [2, 3, 3],
      [3, 3, 3],
    ],
    SZ: [
      [4, 4],
      [5, 4],
    ],
    TD: [[2, 2, 2, 2]],
    TG: [[2, 2, 2, 2]],
    TH: [
      [3, 4],
      [2, 3, 3],
      [4, 3, 3],
    ],
    TJ: [
      [6, 2],
      [3, 2, 4],
      [4, 4],
      [2, 3, 4],
    ],
    TL: [
      [3, 4],
      [4, 4],
    ],
    TM: [
      [2, 2, 2, 2],
      [3, 2, 2],
      [2, 6],
    ],
    TN: [[2, 3, 3]],
    TO: [
      [2, 3],
      [4, 3],
      [3, 4],
    ],
    TR: [
      [3, 3, 4],
      [3, 3, 2, 2],
      [3, 3, 6],
    ],
    TV: [
      [2, 3],
      [2, 4],
      [2, 5],
    ],
    TW: [
      [2, 4],
      [2, 3, 3],
      [3, 4],
      [3, 3, 3],
      [2, 4, 4],
    ],
    TZ: [
      [3, 2, 4],
      [2, 3, 4],
      [2, 7],
      [3, 3, 3],
    ],
    UA: [
      [3, 3, 3],
      [4, 5],
      [2, 3, 4],
    ],
    UG: [
      [4, 5],
      [3, 6],
      [2, 7],
    ],
    US: [
      [3, 4],
      [3, 3, 4],
    ],
    UY: [[4], [3, 3], [3, 4], [2, 3, 3], [4, 4], [3, 3, 2], [3, 3, 3, 2]],
    UZ: [[2, 3, 2, 2]],
    VE: [[3, 7]],
    VN: [
      [2, 5],
      [4, 4],
      [2, 3, 2, 2],
      [3, 3, 3],
      [2, 4, 4],
      [3, 4, 3],
    ],
    VU: [[3, 4]],
    WF: [
      [2, 2, 2],
      [3, 2, 2, 2],
    ],
    WS: [[5], [3, 3], [2, 5]],
    XK: [
      [3, 5],
      [2, 3, 3],
      [3, 3, 3],
      [2, 7],
    ],
    YE: [
      [3, 3],
      [3, 3, 3],
    ],
    ZA: [
      [2, 3],
      [2, 3, 2],
      [3, 3, 3],
      [2, 3, 4],
      [3, 3, 4],
    ],
    ZM: [
      [3, 3, 3],
      [2, 7],
    ],
    ZW: [
      [3, 3],
      [3, 2],
      [3, 4],
      [2, 7],
      [2, 3, 4],
      [3, 3, 3],
      [4, 6],
      [2, 3],
      [2, 3, 3],
      [4, 3],
    ],
  }

  export function groupDigits(
    digits: string,
    country: Code,
    sep = " ",
  ): string {
    const patterns = GROUP_PATTERNS[country]
    if (!patterns) return digits

    const matched = patterns.find(
      (p) => p.reduce((a, b) => a + b, 0) === digits.length,
    )
    if (!matched) return digits

    const groups: string[] = []
    let pos = 0
    for (const size of matched) {
      groups.push(digits.slice(pos, pos + size))
      pos += size
    }

    return groups.join(sep)
  }

  export function normalizePhone(input: string): string {
    const onlyNumber = input.replace(/[^0-9]/g, "")
    return onlyNumber.startsWith("0") ? onlyNumber.slice(1) : onlyNumber
  }

  export function formatPhone(phone: string, countryCode: Code = "ID"): string {
    // Keep digits only — no dial code, no +
    const digits = phone.replace(/\D/g, "")
    if (!digits) return ""

    return groupDigits(digits, countryCode).replace(/ /g, "-")
  }

  export function mask(phone: string, country: Code = "ID", visibleCount = 4) {
    const digits = phone.replace(/\D/g, "")
    const n = Math.min(Math.max(visibleCount, 0), digits.length)
    const visible = n > 0 ? digits.slice(-n) : ""
    const hidden = "*".repeat(digits.length - n)
    return groupDigits(hidden + visible, country, "-")
  }
}
