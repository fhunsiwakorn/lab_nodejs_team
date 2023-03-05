const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
app.use(express.json(), cors());
const fullname = "Team Project";
//  data
const members = [
  {
    id: 1,
    name: "อิม นายอน  (Im Nayeon)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/9376de90-0940-11eb-b35d-299eb29d6529_original.jpg",
  },
  {
    id: 2,
    name: "ยู จองยอน (Yoo Jeong-yeon)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/921b4630-0940-11eb-b35d-299eb29d6529_original.jpg",
  },
  {
    id: 3,
    name: "ฮิราอิ โมโมะ (Hirai Momo)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/92fd1ab0-0940-11eb-8d0b-db22203d57e6_original.jpg",
  },
  {
    id: 4,
    name: "มินาโตซากิ ซานะ (Minatozaki Sana)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/939cdd20-0940-11eb-8d0b-db22203d57e6_original.jpg",
  },
  {
    id: 5,
    name: "พัค จีฮโย (Park Ji hyo)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/928133f0-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
  {
    id: 6,
    name: "เมียวอิ มินะ (Myoui Mina)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/92aa66d0-0940-11eb-8c17-5bb542a40882_original.jpg",
  },
  {
    id: 7,
    name: " คิม ดาฮยอน (Kim Dahyun)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/91fe4850-0940-11eb-b35d-299eb29d6529_original.jpg",
  },
  {
    id: 7,
    name: " ซน แชยอง (Son Chae Young)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/91891850-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
  {
    id: 8,
    name: " ซน แชยอง (Son Chae Young)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/91891850-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
  {
    id: 9,
    name: " โจว จื่อวี่ (Chou Tzu Yu)",
    band: "TWICE",
    formed: "JYP Entertainment",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/93f00630-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
];

const products = [
  {
    id: "1",
    name: "Apple Watch series 8",
    category: "Apple",
    price: 15000,
    cover:
      "https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg",
  },
  {
    id: "2",
    name: "Iphone 14 PRO",
    category: "Apple",
    price: 35000,
    cover:
      "https://promotions.co.th/wp-content/uploads/2022/09/iphone14-pro-max.jpg",
  },
  {
    id: "3",
    name: "จอมอนิเตอร์ 27นิ้ว จอคอม 75HZ หน้าจอโค้ง จอเกมมิ่ง LED Gaming monitor จอมอนิเตอร์เกมมิ่ง VGA HDMI จอมอนิเตอ สปอตสินค้า",
    category: "LG",
    price: 5600,
    cover:
      "https://www.techmoblog.com/uploads/content_images/201610/img_1476165152_81877887513b.jpg",
  },
  {
    id: "4",
    name: "HEADSET (หูฟัง) ONIKUMA K9 - 3.5 MM (PINK)",
    category: "ONIKUMA ",
    price: 990,
    cover:
      "https://www.jib.co.th/img_master/product/original/20210803092821_41661_66_1.jpg",
  },
  {
    id: "5",
    name: "Apple iPad Gen 9 | iStudio by copperwired",
    category: "Apple",
    price: 12900,
    cover:
      "https://store.ais.co.th/media/catalog/product/i/p/ipad_10.2_inch_wi-fi_space_gray_pdp_image_position-1b__th_2.jpg",
  },
];

const cars = [
  {
    id: "1",
    name: "Toyota Yaris Ativ",
    description:
      "เครื่องยนต์เบนซินแบบ 4 สูบ ขนาดความจุ 1.2 ลิตร กำลังสูงสุด 94 แรงม้า ที่ 6,000 รอบ/นาที และแรงบิดสูงสุด 110 นิวตันเมตร ที่ 4,400 รอบ/นาที ส่งกำลังผ่านเกียร์อัตโนมัติ CVT ขับเคลื่อนล้อหน้า อัตราสิ้นเปลืองเฉลี่ย 23.3 กิโลเมตร/ลิตร",
    price: 549000,
    cover:
      "https://s359.thaibuffer.com/pagebuilder/1f15c9d5-a7b5-410d-a3e9-13cc207adb27.jpg",
  },
  {
    id: "2",
    name: "Honda City Hatchback",
    description:
      "เครื่องยนต์แบบ 4 สูบ ขนาด 1.0 ลิตร เทอร์โบ  กำลังสูงสุด 122 แรงม้า ที่ 5,500 รอบ/นาที และแรงบิดสูงสุด 173 นิวตันเมตร ที่ช่วง 2,000-4,500 รอบ/นาที ส่งกำลังผ่านเกียร์อัตโนมัติ CVT ขับเคลื่อนล้อหน้า อัตราสิ้นเปลืองเฉลี่ย 23.3 กิโลเมตร/ลิตร",
    price: 599000,
    cover:
      "https://s359.thaibuffer.com/pagebuilder/79462925-ef5d-4956-8623-341facab9b4e.jpg",
  },
  {
    id: "3",
    name: "Nissan Almera",
    description:
      "เครื่องยนต์เบนซินแบบ 3 สูบ ขนาด 1.0 ลิตร เทอร์โบ กำลังสูงสุด 100 แรงม้า ที่ 5,000 รอบ/นาที และแรงบิดสูงสุด 152 นิวตันเมตร ที่ช่วง 2,400-4,000 รอบ/นาที ส่งกำลังผ่านเกียร์อัตโนมัติ CVT ขับเคลื่อนล้อหน้า อัตราสิ้นเปลืองเฉลี่ย 23.3 กิโลเมตร/ลิตร",
    price: 565000,
    cover:
      "https://s359.thaibuffer.com/pagebuilder/70dfbfa2-5bf2-475b-a5f8-9bb7514e6f31.jpg",
  },
  {
    id: "4",
    name: "Suzuki Swift",
    description:
      "เครื่องยนต์เบนซิน 4 สูบ ขนาด 1.2 ลิตร กำลังสูงสุด 83 แรงม้า ที่ 6,000 รอบ/นาที และแรงบิดสูงสุด 108 นิวตันเมตร ที่ 4,400 รอบ/นาที ส่งกำลังผ่านเกียร์อัตโนมัติ CVT ขับเคลื่อนล้อหน้า อัตราสิ้นเปลืองเฉลี่ย 23.3 กิโลเมตร/ลิตร",
    price: 567000,
    cover:
      "https://s359.thaibuffer.com/pagebuilder/70dfbfa2-5bf2-475b-a5f8-9bb7514e6f31.jpg",
  },
  {
    id: "5",
    name: "Mazda 2 Hatchback",
    description:
      "เครื่องยนต์ 4 สูบ ขนาด 1.3 ลิตร กำลังสูงสุด 93 แรงม้า ที่ 5,800 รอบ/นาที และแรงบิดสูงสุด 123 นิวตันเมตร ที่ 4,000 รอบ/นาที ส่งกำลังผ่านเกียร์อัตโนมัติ 6 สปีด ขับเคลื่อนล้อหน้า อัตราสิ้นเปลืองเฉลี่ย 23.3 กิโลเมตร/ลิตร",
    price: 546000,
    cover:
      "https://s359.thaibuffer.com/pagebuilder/acb3bff5-dfe7-446c-aa54-f0e23bcfc327.jpg",
  },
];

const movies = [
  {
    id: "1",
    name: "Knock at the Cabin (2023)",
    directed_by: "M. Night Shyamalan",
    starring:
      "Jonathan Groff, Ben Aldridge, Kristen Cui, Dave Bautista, Nikki Amuka-Bird, Rupert Grint, Abby Quinn",
    opening_on: "February 3, 2023",
    cover: "https://i.ytimg.com/vi/gv_QhoUy-xc/maxresdefault.jpg",
  },
  {
    id: "2",
    name: "Magic Mike's Last Dance (2023)",
    directed_by: "Steven Soderbergh",
    starring: " Channing Tatum, Salma Hayek, Gavin Spokes, Caitlin Gerard",
    opening_on: "February 10, 2023",
    cover:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/Magic-Mike-Last-Day-Cast-Crew-Release-Channing-Tatum.jpg",
  },
  {
    id: "3",
    name: "Ant-Man and The Wasp: Quantumania (2023)",
    directed_by: "Peyton Reed",
    starring:
      "Paul Rudd, Evangeline Lilly, Michael Douglas, Michelle Pfeiffer, Jonathan Majors, Bill Murray",
    opening_on: "February 17, 2023",
    cover:
      "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_mas_mob_03.jpg",
  },
  {
    id: "4",
    name: "Cocaine Bear (2023)",
    directed_by: "Elizabeth Banks",
    starring:
      "Keri Russell, Ray Liotta, Margo Martindale, Alden Ehrenreich, O’Shea Jackson Jr., Matthew Rhys",
    opening_on: "February 24, 2023",
    cover:
      "https://dx35vtwkllhj9.cloudfront.net/universalstudios/cocaine-bear/images/regions/us/share.jpg",
  },
  {
    id: "5",
    name: "Creed III (2023)",
    directed_by: "Michael B. Jordan",
    starring:
      "Michael B. Jordan, Tessa Thompson, Jonathan Majors, Phylicia Rashad",
    opening_on: "March 3, 2023",
    cover:
      "https://www.watchinuk.co.uk/wp-content/uploads/2023/02/Creed-III-Creed-3.jpg",
  },
];

const trains = [
  {
    id: "1",
    name: "Siemens Velaro E/AVs 103",
    speed: "400 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/637819118352138399bgyByq.jpg",
  },
  {
    id: "2",
    name: "TGV POS",
    speed: "357 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/637819118352138399hqjPNF.jpg",
  },

  {
    id: "3",
    name: "CRH380A Hexie",
    speed: "302 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/637819118352138399qVTsDt.jpg",
  },

  {
    id: "4",
    name: "Shanghai Maglev",
    speed: "267 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/637819118352138399TYZ2Kg.jpg",
  },
  {
    id: "5",
    name: "Hemu -430 X",
    speed: "262 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/637819118352138399Oj6Tip.jpg",
  },
  {
    id: "6",
    name: "Fuxing Hao CR400AF/BF",
    speed: "249 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/63781911835213839940G9ci.jpg",
  },
  {
    id: "7",
    name: "The Frecciarossa",
    speed: "245 kmph",
    cover:
      "https://media.easemytrip.com/media/Blog/International/637819118352138399/637819118352138399AH4EXD.jpg",
  },
];

const foods = [
  {
    id: "1",
    name: "มัสมั่นไก่ Chicken Massaman Curry",
    description:
      "เปิดตัวกันแบบสุดปังกับแชมป์อาหารจานเด็ดที่สุดในโลกของปี พ.ศ.2564 จากเว็บไซต์ CNN Travel กับเมนู “มัสมั่นไก่” อาหารไทยที่ได้ชื่อว่าเป็นราชาแห่งแกงกะหรี่ ด้วยความเผ็ดร้อนของพริกแกงมัสมั่น ผสานความหอมมันของกะทิที่เคี่ยวให้เข้ากันอย่างลงตัว มาพร้อมกับความหนึบของมันฝรั่ง และความนุ่มของน่องไก่ที่ตุ๋นเข้ากันจนได้ที่ ทานคู่กับข้าวสวยร้อนๆ สักจาน อร่อยติดใจคนทั่วโลกได้อย่างไม่ยากอย่างแน่นอนค่ะ",
    cover:
      "https://static.wixstatic.com/media/c8a905_e3c8602e6e0147ca8b4a81b3f25c5800~mv2.jpg/v1/fill/w_536,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_e3c8602e6e0147ca8b4a81b3f25c5800~mv2.jpg",
  },
  {
    id: "2",
    name: "ต้มยำกุ้ง Tom Yum Kung",
    description:
      "ปังอย่างต่อเนื่องกับต้มยำกุ้ง เมนูอาหารไทยติดอันดับ Top 10 อาหารจานเด็ดที่สุดในโลกจาก CNN Travel เช่นกัน ซึ่งความเด็ดของเมนูต้มยำกุ้งอยู่ตรงที่พริกอร่อยแซ่บซี้ดสะใจคนทานอาหารรสจัดจ้านเป็นอย่างยิ่ง ตามมาด้วยรสเปรี้ยวของน้ำมะนาว รสเค็มของน้ำปลา รวม 3 รสชาติให้เข้ากันอย่างกลมกล่อม ยิ่งอบอวลไปด้วยกลิ่นหอมของพืชสมุนไพรนานาชนิดแล้วนั้นไม่ให้ใครติดใจยังไงไหวใช่ไหมคะ",
    cover:
      "https://static.wixstatic.com/media/c8a905_fe934c09b1d54fe0901a278515d7dd09~mv2.jpg/v1/fill/w_536,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_fe934c09b1d54fe0901a278515d7dd09~mv2.jpg",
  },
  {
    id: "3",
    name: "แกงเขียวหวาน Green Curry",
    description:
      "อีกหนึ่งเมนูแกงรสเด็ดของไทยที่มีมาตั้งแต่ในสมัยโบราณอย่างแกงเขียวหวาน อันอบอวลไปด้วยพริกแกงเขียวหวานสุดเข้มข้นผสานกับกะทิที่เคี่ยวรวมกันให้แตกมัน จากนั้นเติมเนื้อสัตว์ ตามด้วยผักที่เป็นซิกเนเจอร์ของแกงเขียวหวานอย่างใบมะกรูด มะเขือเปราะ มะเขือพวง พริกชี้ฟ้าแดง และใบโหระพา ต้มจนเดือดจนกว่าเข้าที่ค่อยจัดเสิร์ฟทานคู่กับข้าวสวยร้อนๆ ก็เข้ากันดี หรือทานกับขนมจีนก็ฟินสุดใจ ไม่ว่าจะทานแบบไหนก็อร่อยถูกใจคนทั่วโลกได้อย่างไม่ยากเลยค่ะ",
    cover:
      "https://static.wixstatic.com/media/c8a905_a7c99d53e38545bbb372090f709ef44c~mv2.jpg/v1/fill/w_536,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_a7c99d53e38545bbb372090f709ef44c~mv2.jpg",
  },
  {
    id: "4",
    name: "ผัดไทย Pad Thai",
    description:
      "ตำนานสตรีทฟู้ดเมืองไทยต้องยกให้จานนี้เลย! กับผัดไทย ก๋วยเตี๋ยวเส้นจันท์ผัดกับซอสรสเปรี้ยวนำหวานตามทำจากมะขามเปียก เพิ่มสัมผัสกรุบให้กับอาหารด้วยไชโป๊วและเต้าหู้ จากนั้นใส่ผักอย่างถั่วงอกและกุ้ยช่าย คลุกเคล้าให้เข้ากัน ก่อนปิดท้ายด้วยตอกไข่ไก่แล้วยีให้พอแตกก่อนจะคลุกเคล้าอีกครั้ง แล้วตักใส่จานเสิร์ฟคู่กับเครื่องปรุงพริกน้ำตาลมะนาว และผักเคียงอย่างถั่วงอกดิบ กุ้ยช่าย และหัวปลี อร่อยฟินแบบไทยๆ ได้ทุกหัวมุมเมืองตามตรอกซอกซอยค่ะ",
    cover:
      "https://static.wixstatic.com/media/c8a905_13c6ce2f2429470d804ac61f642cde91~mv2.jpg/v1/fill/w_536,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c8a905_13c6ce2f2429470d804ac61f642cde91~mv2.jpg",
  },
];

app.get("/", (req, res) => {
  res.json({ message: fullname });
});

app.get("/members", (req, res) => {
  res.json(members);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/cars", (req, res) => {
  res.json(cars);
});
app.get("/movies", (req, res) => {
  res.json(movies);
});
app.get("/trains", (req, res) => {
  res.json(trains);
});

app.get("/foods", (req, res) => {
  res.json(foods);
});

app.listen(port, () => {
  console.log("Application is running on port 9000");
});
