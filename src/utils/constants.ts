export enum HEADER {
  SHOP_FEED = "SHOP FEED",
  CREATE_ORDER = "CREATE ORDER",
  PRODUCT_DETAILS = "ADD PRODUCT DETAILS",
  DELIVERY_DETAILS = "ADD DELIVERY DETAILS",
  REQUEST_FEED = "REQUEST FEED",
  CHAT = "CHAT",
  INVOICE = "INVOICE",
  OFFER_DETAILS = "OFFER DETAILS",
  PROFILE = "PROFILE",
  PENDING_ORDERS = "PENDING ORDERS",
  ORDERS = "ORDERS",
  DELIVERY_REWARD = "ADD DELIVERY REWARD",
  DELIVERY_DATE = "ADD DELIVERY DATE",
  SEARCH_RESULTS = "SEARCH RESULTS",
  OFFER_MADE = "OFFER MADE",
  DELIVERY_OFFERS = "DELIVERY OFFERS",
  ADD_DELIVERY_REWARD = "ADD DELIVERY REWARD"
}

export enum PERMISSIONS {
  CAMERA_PERMISSION = "hasCameraPermission"
}

export enum AIRBUK_URLS {
  PRIVACY_PAGE = "https://airbuk.com/privacy_policy.html"
}

export enum DESCRIPTIONS {
  DELIVERY_DETAILS_DESCRIPTION_A = "Hey make sure its the exact price for this single item. If the price here is wrong then Travelers won't be able to purchase this item for you.",
  DELIVERY_DETAILS_DESCRIPTION_B = "Estimated total is inclusive of a small charge to Airbük, which helps keep the platform going.",
  DELIVERY_DETAILS_DESCRIPTION_C = "Your order will be matched by Travelers according to the location you provide here, make sure it is where you will be to receive the delivery..",
  DELIVERY_DETAILS_DESCRIPTION_D = "Orders with map locations get more delivery offers from the travelers",
  FAVOURITE_COUNTRY_DESCRIPTION_A = "Browse products from all countries or select up to 8 countries as favorite for quick access.",
  SEARCH_RESULT_A = "User provided details in the 'additional information' from the manual order creation screen appear here.",
  DELIVERY_REWARD_MESSAGE = "Hello (Buyer name) I'm traveling from Mumbai to London and I can bring this item for you before 21 November, 2018. Please accept my offer as soon as possible so that I can buy it for you. Let me know if you need anything else from London, UK.",
  POLICY_A = "Offers with personal messages are accepted faster.",
  POLICY_B = "I have read and agree with Airbük's"
}

export enum ORDER_COMPLETE {
  HEADING = "Your order was created and posted!",
  SUB_HAEDING = "Travelers coming your way have been notified and will contact you soon!",
  DESCRIPTION = "For your own safety avoid making deals with travelers outside of Airbük.",
  BUTTON = "OK"
}

export enum OFFER_DECLINE {
  HEADING = "Offer from (Traveler Name) was declined.",
  SUB_HAEDING = "",
  DESCRIPTION = "",
  BUTTON = "OK"
}

export enum DEPOSIT_MADE {
  HEADING = "You made a deposit of $xxxxx",
  SUB_HAEDING = "",
  DESCRIPTION = "The traveler will be notified and asked to purchase the product you requested.",
  BUTTON = "OK"
}

export enum EDIT_ORDER {
  HEADING = "Your order was edited and updated! ",
  SUB_HAEDING = "Travelers coming your way have been notified and will contact you soon!  ",
  DESCRIPTION = "For your own safety avoid making deals with travelers outside of Airbük.",
  BUTTON = "OK"
}

export enum SAMPLE_ORDER_DETAILS {
  MAIN_COLOR = " Black",
  Series_Name = " Alpha 3",
  Manufacturer_Material = " Ballistic Nylon",
  Best_For = " Unisex",
  Group_Package_Size = " 56.0 cm x 33.0 cm x 86.5 cm",
  Weight = " 8.5 kg",
  Gtin = " 742315471747",
  Warranty_Information = " 5 Years.Covers defective workmanship and/or materials. First year, worry free.",
  Product_Description = " Product Description Usage date marked separately or best within 12 months after opening, and the date of manufacture is difficult to mark since it frequently changes. Pump First Care Activating Serum 2~3 times on palm of hand, deeply inhale the fragrance with two hands.Apply with fingertips along the skin texture and wrap entire face with hands to help absorption."
}

export enum COMMENTS {
  DELIVERY_DETAILS_COMMENT = "i.e. what size, color, model of the product do you want"
}

export enum IMAGE_UPLOAD {
  SUCCESS = "Image uploaded successfully",
  FAIL = "Image faied to upload, try again"
}

export enum ALERT {
  EDIT_DESCRIPTION = "Editing your trip will undo any delivery offers you made.",
  DELETE_DESCRIPTION = "Deleting your trip will cancel any delivery offers you made.",
  SURE = "Are you sure?",
  SEARCH_HEADING = "Quick search for orders in your destination city.",
  NOTIFY_HEADING = "Notifications are mute for this trip",
  NOTIFY_PURCHASE = "Notify buyer that you purchased the product."
}

export enum TRIP {
  ADDED = "Your trip was saved!",
  EDITED = "Your trip was edited!",
  DESCRIPTION = "Now you can view all delivery offer on your trip likewise all the buyers can now view your travel plan.",
  BUTTON = "OK"
}

export const countryList = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" }
];

export const getAlphabets = () => {
  const alphabets = [];
  for (let k = 65; k < 91; k += 1) {
    const str = String.fromCharCode(k);
    alphabets.push(str);
  }
  return alphabets;
};
