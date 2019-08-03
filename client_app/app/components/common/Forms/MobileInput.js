// import React from 'react';
// import PropTypes from 'prop-types';
// // import { isValidPhoneNumber, formatPhoneNumber } from 'react-phone-number-input';
// import Phone from 'react-phone-number-input';
// import metadata from 'libphonenumber-js/metadata.full.json';
// import { isValidNumber as isValidPhoneNumber, formatNumber as formatPhoneNumber } from 'libphonenumber-js';
// import labels from './country_names.json';
// // import 'react-phone-number-input/rrui.css';
// import 'react-phone-number-input/style.css';
// // const withCountryCode = {"AF":"Afghanistan (+93)","AX":"Åland Islands (+358)","AL":"Albania (+355)","DZ":"Algeria (+213)","AS":"American Samoa (+1684)","AD":"Andorra (+376)","AO":"Angola (+244)","AI":"Anguilla (+1264)","AQ":"Antarctica (+672)","AG":"Antigua and Barbuda (+1268)","AR":"Argentina (+54)","AM":"Armenia (+374)","AW":"Aruba (+297)","AU":"Australia (+61)","AT":"Austria (+43)","AZ":"Azerbaijan (+994)","BS":"Bahamas (+1242)","BH":"Bahrain (+973)","BD":"Bangladesh (+880)","BB":"Barbados (+1246)","BY":"Belarus (+375)","BE":"Belgium (+32)","BZ":"Belize (+501)","BJ":"Benin (+229)","BM":"Bermuda (+1441)","BT":"Bhutan (+975)","BO":"Bolivia, Plurinational State of bolivia (+591)","BA":"Bosnia and Herzegovina (+387)","BW":"Botswana (+267)","BV":"Bouvet Island (+47)","BR":"Brazil (+55)","IO":"British Indian Ocean Territory (+246)","BN":"Brunei Darussalam (+673)","BG":"Bulgaria (+359)","BF":"Burkina Faso (+226)","BI":"Burundi (+257)","KH":"Cambodia (+855)","CM":"Cameroon (+237)","CA":"Canada (+1)","CV":"Cape Verde (+238)","KY":"Cayman Islands (+ 345)","CF":"Central African Republic (+236)","TD":"Chad (+235)","CL":"Chile (+56)","CN":"China (+86)","CX":"Christmas Island (+61)","CC":"Cocos (Keeling) Islands (+61)","CO":"Colombia (+57)","KM":"Comoros (+269)","CG":"Congo (+242)","CD":"Congo, The Democratic Republic of the Congo (+243)","CK":"Cook Islands (+682)","CR":"Costa Rica (+506)","CI":"Cote d'Ivoire (+225)","HR":"Croatia (+385)","CU":"Cuba (+53)","CY":"Cyprus (+357)","CZ":"Czech Republic (+420)","DK":"Denmark (+45)","DJ":"Djibouti (+253)","DM":"Dominica (+1767)","DO":"Dominican Republic (+1849)","EC":"Ecuador (+593)","EG":"Egypt (+20)","SV":"El Salvador (+503)","GQ":"Equatorial Guinea (+240)","ER":"Eritrea (+291)","EE":"Estonia (+372)","ET":"Ethiopia (+251)","FK":"Falkland Islands (Malvinas) (+500)","FO":"Faroe Islands (+298)","FJ":"Fiji (+679)","FI":"Finland (+358)","FR":"France (+33)","GF":"French Guiana (+594)","PF":"French Polynesia (+689)","TF":"French Southern Territories (+262)","GA":"Gabon (+241)","GM":"Gambia (+220)","GE":"Georgia (+995)","DE":"Germany (+49)","GH":"Ghana (+233)","GI":"Gibraltar (+350)","GR":"Greece (+30)","GL":"Greenland (+299)","GD":"Grenada (+1473)","GP":"Guadeloupe (+590)","GU":"Guam (+1671)","GT":"Guatemala (+502)","GG":"Guernsey (+44)","GN":"Guinea (+224)","GW":"Guinea-Bissau (+245)","GY":"Guyana (+592)","HT":"Haiti (+509)","HM":"Heard Island and Mcdonald Islands (+0)","VA":"Holy See (Vatican City State) (+379)","HN":"Honduras (+504)","HK":"Hong Kong (+852)","HU":"Hungary (+36)","IS":"Iceland (+354)","IN":"India (+91)","ID":"Indonesia (+62)","IR":"Iran, Islamic Republic of Persian Gulf (+98)","IQ":"Iraq (+964)","IE":"Ireland (+353)","IM":"Isle of Man (+44)","IL":"Israel (+972)","IT":"Italy (+39)","JM":"Jamaica (+1876)","JP":"Japan (+81)","JE":"Jersey (+44)","JO":"Jordan (+962)","KZ":"Kazakhstan (+7)","KE":"Kenya (+254)","KI":"Kiribati (+686)","KP":"Korea, Democratic People's Republic of Korea (+850)","KR":"Korea, Republic of South Korea (+82)","XK":"Kosovo (+383)","KW":"Kuwait (+965)","KG":"Kyrgyzstan (+996)","LA":"Laos (+856)","LV":"Latvia (+371)","LB":"Lebanon (+961)","LS":"Lesotho (+266)","LR":"Liberia (+231)","LY":"Libyan Arab Jamahiriya (+218)","LI":"Liechtenstein (+423)","LT":"Lithuania (+370)","LU":"Luxembourg (+352)","MO":"Macao (+853)","MK":"Macedonia (+389)","MG":"Madagascar (+261)","MW":"Malawi (+265)","MY":"Malaysia (+60)","MV":"Maldives (+960)","ML":"Mali (+223)","MT":"Malta (+356)","MH":"Marshall Islands (+692)","MQ":"Martinique (+596)","MR":"Mauritania (+222)","MU":"Mauritius (+230)","YT":"Mayotte (+262)","MX":"Mexico (+52)","FM":"Micronesia, Federated States of Micronesia (+691)","MD":"Moldova (+373)","MC":"Monaco (+377)","MN":"Mongolia (+976)","ME":"Montenegro (+382)","MS":"Montserrat (+1664)","MA":"Morocco (+212)","MZ":"Mozambique (+258)","MM":"Myanmar (+95)","NA":"Namibia (+264)","NR":"Nauru (+674)","NP":"Nepal (+977)","NL":"Netherlands (+31)","AN":"Netherlands Antilles (+599)","NC":"New Caledonia (+687)","NZ":"New Zealand (+64)","NI":"Nicaragua (+505)","NE":"Niger (+227)","NG":"Nigeria (+234)","NU":"Niue (+683)","NF":"Norfolk Island (+672)","MP":"Northern Mariana Islands (+1670)","NO":"Norway (+47)","OM":"Oman (+968)","PK":"Pakistan (+92)","PW":"Palau (+680)","PS":"Palestinian Territory, Occupied (+970)","PA":"Panama (+507)","PG":"Papua New Guinea (+675)","PY":"Paraguay (+595)","PE":"Peru (+51)","PH":"Philippines (+63)","PN":"Pitcairn (+64)","PL":"Poland (+48)","PT":"Portugal (+351)","PR":"Puerto Rico (+1939)","QA":"Qatar (+974)","RO":"Romania (+40)","RU":"Russia (+7)","RW":"Rwanda (+250)","RE":"Reunion (+262)","BL":"Saint Barthelemy (+590)","SH":"Saint Helena, Ascension and Tristan Da Cunha (+290)","KN":"Saint Kitts and Nevis (+1869)","LC":"Saint Lucia (+1758)","MF":"Saint Martin (+590)","PM":"Saint Pierre and Miquelon (+508)","VC":"Saint Vincent and the Grenadines (+1784)","WS":"Samoa (+685)","SM":"San Marino (+378)","ST":"Sao Tome and Principe (+239)","SA":"Saudi Arabia (+966)","SN":"Senegal (+221)","RS":"Serbia (+381)","SC":"Seychelles (+248)","SL":"Sierra Leone (+232)","SG":"Singapore (+65)","SK":"Slovakia (+421)","SI":"Slovenia (+386)","SB":"Solomon Islands (+677)","SO":"Somalia (+252)","ZA":"South Africa (+27)","SS":"South Sudan (+211)","GS":"South Georgia and the South Sandwich Islands (+500)","ES":"Spain (+34)","LK":"Sri Lanka (+94)","SD":"Sudan (+249)","SR":"Suriname (+597)","SJ":"Svalbard and Jan Mayen (+47)","SZ":"Swaziland (+268)","SE":"Sweden (+46)","CH":"Switzerland (+41)","SY":"Syrian Arab Republic (+963)","TW":"Taiwan (+886)","TJ":"Tajikistan (+992)","TZ":"Tanzania, United Republic of Tanzania (+255)","TH":"Thailand (+66)","TL":"Timor-Leste (+670)","TG":"Togo (+228)","TK":"Tokelau (+690)","TO":"Tonga (+676)","TT":"Trinidad and Tobago (+1868)","TN":"Tunisia (+216)","TR":"Turkey (+90)","TM":"Turkmenistan (+993)","TC":"Turks and Caicos Islands (+1649)","TV":"Tuvalu (+688)","UG":"Uganda (+256)","UA":"Ukraine (+380)","AE":"United Arab Emirates (+971)","GB":"United Kingdom (+44)","US":"United States (+1)","UY":"Uruguay (+598)","UZ":"Uzbekistan (+998)","VU":"Vanuatu (+678)","VE":"Venezuela, Bolivarian Republic of Venezuela (+58)","VN":"Vietnam (+84)","VG":"Virgin Islands, British (+1284)","VI":"Virgin Islands, U.S. (+1340)","WF":"Wallis and Futuna (+681)","YE":"Yemen (+967)","ZM":"Zambia (+260)","ZW":"Zimbabwe (+263)"};

// class MobileInput extends React.PureComponent {
//   static propTypes = {
//     setMobileNumber: PropTypes.func.isRequired,
//     disabled: PropTypes.bool.isRequired,
//     intlPhoneNumber: PropTypes.string
//   };
//   static defaultProps = {
//     disabled: false
//   };
//   state = {
//     intlPhoneNumber: this.props.intlPhoneNumber || '', country_code: '', mobile_number: '',
//     valid: isValidPhoneNumber(this.props.intlPhoneNumber || ''), country_abbr: this.props.country_abbr || ''
//   };

//   componentWillReceiveProps(nextProps) {
//     if (!!nextProps.intlPhoneNumber && nextProps.intlPhoneNumber !== this.props.intlPhoneNumber) {
//       const { intlPhoneNumber, country_abbr } = nextProps; // country_abbr should also come along with intlPhoneNumber
//       this.setState({ intlPhoneNumber, valid: isValidPhoneNumber(intlPhoneNumber), country_abbr })
//     }
//   }
//   handleChange = (intlPhoneNumber = '') => {
//     const valid = isValidPhoneNumber(intlPhoneNumber);
//     const { country_abbr } = this.state;
//     if (valid) {
//       const ParsedNumbers = formatPhoneNumber(intlPhoneNumber, 'International').split(' ');
//       const country_code = ParsedNumbers[0];
//       const mobile_number = intlPhoneNumber.split(country_code)[1];
//       this.setState({ intlPhoneNumber, country_code, mobile_number, valid });
//       this.props.setMobileNumber({ intlPhoneNumber, country_abbr, country_code, mobile_number, valid });
//     } else {
//       this.setState({ intlPhoneNumber, valid });
//       this.props.setMobileNumber({ intlPhoneNumber: '', country_code: '', mobile_number: '', valid });
//     }
//   };
//   handleCountryChange = (country_abbr) => this.setState({ country_abbr });
//   render() {
//     const { intlPhoneNumber, valid, country_abbr } = this.state;

//     return (
//       <div className="phone-container">
//         <Phone
//           placeholder="Start typing a phone number" className="phone" value={intlPhoneNumber || ''}
//           onChange={this.handleChange} country={country_abbr} onCountryChange={this.handleCountryChange}
//           disabled={this.props.disabled} metadata={metadata} labels={labels}
//         />
//         {!!intlPhoneNumber && (valid ? <i className="icon-check-circle"/> : <i className="icon-times-circle"/>)}
//       </div>
//     )
//   }
// }

// export default MobileInput;
