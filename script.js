let cart = [];
let lang = 'th';

// ข้อความใบเสร็จหลายภาษา
const receiptText = {
    th: { receiptTitle: "ใบเสร็จ", tableNumber: "เลขโต๊ะ", total: "รวมสุทธิ", back: "กลับเมนู", orderSuccess: "สั่งอาหารเรียบร้อยแล้ว!" },
    en: { receiptTitle: "Receipt", tableNumber: "Table", total: "Total", back: "Back to Menu", orderSuccess: "Order placed successfully!" },
    zh: { receiptTitle: "收据", tableNumber: "桌号", total: "总计", back: "返回菜单", orderSuccess: "订餐成功！" }
};
let selectedTable = localStorage.getItem("selectedTable") || null;

// ข้อความ UI หลายภาษา
const tableText = {
    th: {
        title: "เลือกโต๊ะ",
        table: "โต๊ะ",
        warning: "กรุณาเลือกโต๊ะก่อนสั่งอาหาร"
    },
    en: {
        title: "Select Table",
        table: "Table",
        warning: "Please select a table before ordering"
    },
    zh: {
        title: "选择桌号",
        table: "桌号",
        warning: "请先选择桌号"
    }
};

const dictionary = {
    th: { 
        header:"สเต็กเด็กแนว สาขาสนามฟุตบอลไพรมารี่ ปลวกแดง โต๊ะ 1", 
        cartTitle:"ตะกร้าสินค้า", 
        orderBtn:"สั่งอาหาร", 
        emptyCart:"ตะกร้าว่าง", 
        checkoutBtn:"ไปหน้า Checkout", 
        menu:[
            {name:"สปาเก็ตตี้คาโบนาร่า", price:79, img:"images/1.jpg"},
            {name:"สปาเก็ตตี้ซอสขี้เมาหมู", price:69, img:"images/2.jpg"},
            {name:"สปาเก็ตตี้ซอสมะเขือเทศหมูสับ", price:69, img:"images/3.jpg"},
            {name:"สปาเก็ตตี้ซอสมะเขือเทศไก่สับ", price:69, img:"images/3.jpg"},
            {name:"ผักโขมอบชีส", price:59, img:"images/4.jpg"},
            {name:"หมูแดดเดียว", price:50, img:"images/5.jpg"},
            {name:"ซุปเห็ด", price:49, img:"images/6.jpg"},
            {name:"ซุปผักโขม", price:49, img:"images/7.jpg"},
            {name:"นักเก็ต", price:45, img:"images/8.jpg"},
            {name:"เฟรนช์ฟรายส์", price:39, img:"images/9.jpg"},
            {name:"ไก่ป๊อป", price:45, img:"images/10.jpg"},
            {name:"ไก่ป๊อปสไปซี่", price:45, img:"images/10.jpg"},
            {name:"ฟิชแอนด์ชิปส์", price:69, img:"images/11.jpg"},
            {name:"ข้าวหน้าสเต็กไก่ย่าง", price:59, img:"images/13.jpg"},
            {name:"ข้าวหน้าสเต็กหมูย่าง", price:99, img:"images/14.jpg"},
            {name:"ข้าวหน้าสเต็กไก่ทอดกรอบ", price:59, img:"images/15.jpg"},
            {name:"ข้าวหน้าสเต็กสันคอหมู", price:169, img:"images/16.jpg"},
            {name:"ข้าวหน้าสเต็กโคขุน", price:119, img:"images/17.jpg"},
            {name:"ข้าวหน้าสเต็กแซลมอน", price:189, img:"images/18.jpg"},
            {name:"ข้าวหน้าปลาสเต็กทอดกรอบ", price:59, img:"images/19.jpg"},
            {name:"ข้าวหน้าปลาซาบะญี่ปุ่นย่าง", price:89, img:"images/20.jpg"},
            {name:"ข้าวหน้าสเต็กหมูบด", price:79, img:"images/21.jpg"},
            {name:"ข้าวหน้าสเต็กเนื้อบด", price:99, img:"images/22.jpg"},
            {name:"ข้าวหมูคั่วกลิ้ง", price:49, img:"images/23.jpg"},
            {name:"สลัดสเต็กปลาทอด", price:69, img:"images/24.jpg"},
            {name:"สลัดสเต็กอกไก่ย่าง", price:69, img:"images/25.jpg"},
            {name:"สลัดสเต็กหมูย่าง", price:99, img:"images/26.jpg"},
            {name:"สลัดผัก", price:49, img:"images/27.jpg"},
            {name:"สเต็กเนื้อโคคุน", price:109, img:"images/28.jpg"},
            {name:"ริปอายสเต็กเนื้อ", price:119, img:"images/29.jpg"},
            {name:"ที-โบน สเต็กเนื้อ", price:199, img:"images/30.jpg"},
            {name:"สเต็กปลาซาบะ", price:79, img:"images/31.jpg"},
            {name:"สเต็กปลาทอด", price:109, img:"images/32.jpg"},
            {name:"สเต็กปลาย่างน้ำจิ้มซีฟู้ด", price:99, img:"images/33.jpg"},
            {name:"สเต็กปลาแซลมอน", price:179, img:"images/34.jpg"},
            {name:"พอร์คชอพ", price:109, img:"images/35.jpg"},
            {name:"พอร์คชอพซอสสไปซี่", price:109, img:"images/36.jpg"},
            {name:"พอร์คชอพซอสบาร์บีคิว", price:109, img:"images/36.jpg"},
            {name:"ซี่โคครงบาร์บีคิว", price:169, img:"images/37.jpg"},
            {name:"สเต็กหมูบด", price:69, img:"images/38.jpg"},
            {name:"สเต็กเนื้อบด", price:89, img:"images/39.jpg"},
            {name:"เบอร์เกอร์หมู", price:69, img:"images/40.jpg"},
            {name:"เบอร์เกอร์เนื้อ", price:89, img:"images/41.jpg"},
            {name:"สเต็กไก่", price:49, img:"images/42.jpg"},
            {name:"สะโพกไก่สไปซี่", price:89, img:"images/43.jpg"},
            {name:"สเต็กไก่ซอสบาร์บีคิว", price:59, img:"images/44.jpg"},
            {name:"สเต็กไก่ซอสสไปซี่", price:59, img:"images/44.jpg"},
            {name:"สเต็กหมู", price:89, img:"images/45.jpg"},
            {name:"สเต็กหมูซอสบาร์บีคิว", price:89, img:"images/46.jpg"},
            {name:"สเต็กหมูซอสสไปซี่", price:89, img:"images/46.jpg"},
            {name:"สเต็กหมูสไปซี่", price:109, img:"images/47.jpg"},
            {name:"สเต็กสันคอหมู", price:169, img:"images/48.jpg"},
            {name:"สเต็กสันคอหมูซอสบาร์บีคิว", price:169, img:"images/49.jpg"},
            {name:"สเต็กสันคอหมูซอสสไปซี่", price:169, img:"images/49.jpg"},
            {name:"ไก่ + ปลา + หมู", price:219, img:"images/50.jpg"},
            {name:"ไก่ + ปลา + โคขุน", price:229, img:"images/51.jpg"},
            {name:"ไก่ + โคขุน + พอร์คชอพ + ปลา", price:299, img:"images/52.jpg"},
            {name:"สันคอ + ปลา", price:249, img:"images/53.jpg"},
            {name:"พอร์คชอพ + โคขุน", price:189, img:"images/54.jpg"},
            {name:"พอร์คชอพ + ทีโบน", price:289, img:"images/55.jpg"},
            {name:"หมู + พอร์คชอพ + สันคอ", price:339, img:"images/56.jpg"},
            {name:"แซลมอน + ทีโบน", price:339, img:"images/57.jpg"},
            {name:"พอร์คชอพ + ทีโบน + แซลมอน", price:419, img:"images/58.jpg"},
            {name:"โคขุน + ริบอาย + ทีโบน", price:389, img:"images/59.jpg"},
            {name:"ไก่ + หมู + โคขุน + ปลา + แซลม่อน", price:459, img:"images/60.jpg"},
            {name:"แซลมอน + พอร์คชอพ + ริบอาย", price:349, img:"images/61.jpg"},
            {name:"ปลา + ไก่ + พอร์คชอพ + สันคอ + ริบอาย + ทีโบน", price:599, img:"images/62.jpg"}
        ]
    },
    en: { 
        header:"Dek Naew Steak Primary Football Field Branch, Pluak Daeng Table 1", 
        cartTitle:"Shopping Cart", 
        orderBtn:"Order", 
        emptyCart:"Cart is empty", 
        checkoutBtn:"Go to Checkout", 
        menu:[
            {name:"Spaghetti Carbonara", price:79, img:"images/1.jpg"},
            {name:"Spaghetti with Spicy Thai Basil Sauce Pork", price:69, img:"images/2.jpg"},
            {name:"Spaghetti with Tomato Sauce and Minced Pork", price:69, img:"images/3.jpg"},
            {name:"Spaghetti with Tomato Sauce and Minced Chicken", price:69, img:"images/3.jpg"},
            {name:"Baked Spinach with Cheese", price:59, img:"images/4.jpg"},
            {name:"Thai-Style Sun-Dried Pork", price:50, img:"images/5.jpg"},
            {name:"Creamy Mushroom Soup", price:49, img:"images/6.jpg"},
            {name:"Creamy Spinach Soup", price:49, img:"images/7.jpg"},
            {name:"Chicken Nuggets", price:45, img:"images/8.jpg"},
            {name:"French Fries", price:39, img:"images/9.jpg"},
            {name:"Popcorn Chicken", price:45, img:"images/10.jpg"},
            {name:"Spicy Popcorn Chicken", price:45, img:"images/10.jpg"},
            {name:"Fish & Chips", price:69, img:"images/11.jpg"},
            {name:"Grilled Chicken Steak Rice Bowl", price:59, img:"images/13.jpg"},
            {name:"Rice with Grilled Pork Steak", price:99, img:"images/14.jpg"},
            {name:"Rice with Crispy Fried Chicken Steak", price:59, img:"images/15.jpg"},
            {name:"Rice with Grilled Pork Neck Steak", price:169, img:"images/16.jpg"},
            {name:"Thai Premium Beef Steak Rice", price:119, img:"images/17.jpg"},
            {name:"Rice with Grilled Salmon Steak", price:189, img:"images/18.jpg"},
            {name:"Rice with Crispy Fried Fish Steak", price:59, img:"images/19.jpg"},
            {name:"Japanese Grilled Saba Rice", price:89, img:"images/20.jpg"},
            {name:"Rice with Pork Patty Steak", price:79, img:"images/21.jpg"},
            {name:"Rice with Beef Hamburger Steak", price:99, img:"images/22.jpg"},
            {name:"Southern Thai Spicy Pork Stir-Fry on Rice", price:49, img:"images/23.jpg"},
            {name:"Salad with Crispy Fried Fish Steak", price:69, img:"images/24.jpg"},
            {name:"Salad with Grilled Chicken Breast Steak", price:69, img:"images/25.jpg"},
            {name:"Salad with Grilled Pork Steak", price:99, img:"images/26.jpg"},
            {name:"Fresh Garden Salad", price:49, img:"images/27.jpg"},
            {name:"Thai Premium Beef Steak", price:109, img:"images/28.jpg"},
            {name:"Grilled Ribeye Beef Steak", price:119, img:"images/29.jpg"},
            {name:"T-Bone Beef Steak", price:199, img:"images/30.jpg"},
            {name:"Japanese Saba Steak", price:79, img:"images/31.jpg"},
            {name:"Crispy Fried Fish Steak", price:109, img:"images/32.jpg"},
            {name:"Grilled Fish Steak & Thai Spicy Dipping Sauce", price:99, img:"images/33.jpg"},
            {name:"Salmon Steak", price:179, img:"images/34.jpg"},
            {name:"pork chop", price:109, img:"images/35.jpg"},
            {name:"Spicy Pork Chop", price:109, img:"images/36.jpg"},
            {name:"BBQ Pork Chop", price:109, img:"images/36.jpg"},
            {name:"BBQ Ribs", price:169, img:"images/37.jpg"},
            {name:"Minced Pork Steak", price:69, img:"images/38.jpg"},
            {name:"Minced Beef Steak", price:89, img:"images/39.jpg"},
            {name:"Pork Burger", price:69, img:"images/40.jpg"},
            {name:"Beef Burger", price:89, img:"images/41.jpg"},
            {name:"Chicken Steak", price:49, img:"images/42.jpg"},
            {name:"Spicy Chicken Thigh", price:89, img:"images/43.jpg"},
            {name:"BBQ Chicken Steak", price:59, img:"images/44.jpg"},
            {name:"Spicy Chicken Steak", price:59, img:"images/44.jpg"},
            {name:"Pork Steak", price:89, img:"images/45.jpg"},
            {name:"Pork Steak BBQ Sauce", price:89, img:"images/46.jpg"},
            {name:"Pork Steak Spicy Sauce", price:89, img:"images/46.jpg"},
            {name:"Spicy Pork Steak", price:109, img:"images/47.jpg"},
            {name:"Pork Blade Steak", price:169, img:"images/48.jpg"},
            {name:"Pork Blade Steak BQQ Sauce", price:169, img:"images/49.jpg"},
            {name:"Pork Blade Steak Spicy Sauce", price:169, img:"images/49.jpg"},
            {name:"Chicken+Fish+Pork", price:219, img:"images/50.jpg"},
            {name:"Chicken+Fish+Premium Beef", price:229, img:"images/51.jpg"},
            {name:"Chicken + Premium Beef + Pork Chop + Fish", price:299, img:"images/52.jpg"},
            {name:"Pork Blade + Fish", price:249, img:"images/53.jpg"},
            {name:"Pork Chop + Premium Beef", price:189, img:"images/54.jpg"},
            {name:"Pork Chop + T-Bone Steak", price:289, img:"images/55.jpg"},
            {name:"Pork + Pork Chop + Pork Blade", price:339, img:"images/56.jpg"},
            {name:"Salmon + T-Bone Steak", price:339, img:"images/57.jpg"},
            {name:"Pork Chop + T-Bone Steak + Salmon", price:419, img:"images/58.jpg"},
            {name:"Premium Beef + Ribeye + T-Bone Steak", price:389, img:"images/59.jpg"},
            {name:"Chicken + Pork + Premium Beef + Fish + Salmon", price:459, img:"images/60.jpg"},
            {name:"Salmon + Pork Chop + Ribeye Steak", price:349, img:"images/61.jpg"},
            {name:"Fish + Chicken + Pork Chop + Pork Blade + Ribeye + T-Bone Steak", price:599, img:"images/62.jpg"}
        ]
    },
    zh: { 
        header:"德克耐潮牛排 普拉旺登 小学足球场分店 1桌", 
        cartTitle:"购物车", 
        orderBtn:"点餐", 
        emptyCart:"购物车为空", 
        checkoutBtn:"去结账", 
        menu:[
            {name:"卡邦尼意大利面", price:79, img:"images/1.jpg"},
            {name:"泰式罗勒辣酱猪肉意大利面", price:69, img:"images/2.jpg"},
            {name:"番茄酱猪肉末意大利面", price:69, img:"images/3.jpg"},
            {name:"番茄酱鸡肉末意大利面", price:69, img:"images/3.jpg"},
            {name:"芝士焗菠菜", price:59, img:"images/4.jpg"},
            {name:"泰式风干猪肉", price:50, img:"images/5.jpg"},
            {name:"奶油蘑菇汤", price:49, img:"images/6.jpg"},
            {name:"奶油菠菜汤", price:49, img:"images/7.jpg"},
            {name:"炸鸡块", price:45, img:"images/8.jpg"},
            {name:"炸薯条", price:39, img:"images/9.jpg"},
            {name:"爆米花鸡", price:45, img:"images/10.jpg"},
            {name:"香辣爆米花鸡", price:45, img:"images/10.jpg"},
            {name:"炸鱼薯条", price:69, img:"images/11.jpg"},
            {name:"烤鸡排盖饭", price:59, img:"images/13.jpg"},
            {name:"烤猪排盖饭", price:99, img:"images/14.jpg"},
            {name:"炸鸡排盖饭", price:59, img:"images/15.jpg"},
            {name:"猪颈肉盖饭", price:169, img:"images/16.jpg"},
            {name:"优质牛排盖饭", price:119, img:"images/17.jpg"},
            {name:"三文鱼排盖饭", price:189, img:"images/18.jpg"},
            {name:"炸鱼排盖饭", price:59, img:"images/19.jpg"},
            {name:"日式烤鲭鱼盖饭", price:89, img:"images/20.jpg"},
            {name:"猪肉饼盖饭", price:79, img:"images/21.jpg"},
            {name:"牛肉饼盖饭", price:99, img:"images/22.jpg"},
            {name:"泰南香辣猪肉炒饭", price:49, img:"images/23.jpg"},
            {name:"炸鱼排沙拉", price:69, img:"images/24.jpg"},
            {name:"烤鸡胸肉排沙拉", price:69, img:"images/25.jpg"},
            {name:"烤猪排沙拉", price:99, img:"images/26.jpg"},
            {name:"蔬菜沙拉", price:49, img:"images/27.jpg"},
            {name:"优质牛排", price:109, img:"images/28.jpg"},
            {name:"肉眼牛排", price:119, img:"images/29.jpg"},
            {name:"T骨牛排", price:199, img:"images/30.jpg"},
            {name:"鲭鱼排", price:79, img:"images/31.jpg"},
            {name:"香脆炸鱼排", price:109, img:"images/32.jpg"},
            {name:"烤鱼排配泰式海鲜蘸酱", price:99, img:"images/33.jpg"},
            {name:"三文鱼排", price:179, img:"images/34.jpg"},
            {name:"猪排", price:109, img:"images/35.jpg"},
            {name:"香辣猪排", price:109, img:"images/36.jpg"},
            {name:"烧烤猪排", price:109, img:"images/36.jpg"},
            {name:"烧烤排骨", price:169, img:"images/37.jpg"},
            {name:"猪肉汉堡排", price:69, img:"images/38.jpg"},
            {name:"牛肉汉堡排", price:89, img:"images/39.jpg"},
            {name:"猪肉汉堡", price:69, img:"images/40.jpg"},
            {name:"牛肉汉堡", price:89, img:"images/41.jpg"},
            {name:"鸡排", price:49, img:"images/42.jpg"},
            {name:"香辣鸡腿", price:89, img:"images/43.jpg"},
            {name:"烧烤酱鸡排", price:59, img:"images/44.jpg"},
            {name:"香辣鸡排", price:59, img:"images/44.jpg"},
            {name:"猪排", price:89, img:"images/45.jpg"},
            {name:"烧烤酱猪排", price:89, img:"images/46.jpg"},
            {name:"香辣猪排", price:89, img:"images/46.jpg"},
            {name:"香辣酱猪排", price:109, img:"images/47.jpg"},
            {name:"猪颈肉排", price:169, img:"images/48.jpg"},
            {name:"烧烤酱猪颈肉排", price:169, img:"images/49.jpg"},
            {name:"香辣猪颈肉排", price:169, img:"images/49.jpg"},
            {name:"鸡 + 鱼 + 猪肉", price:219, img:"images/50.jpg"},
            {name:"鸡 + 鱼 + 优质牛肉", price:229, img:"images/51.jpg"},
            {name:"鸡 + 优质牛肉 + 猪排 + 鱼", price:299, img:"images/52.jpg"},
            {name:"猪颈肉 + 鱼", price:249, img:"images/53.jpg"},
            {name:"猪排 + 优质牛肉", price:189, img:"images/54.jpg"},
            {name:"猪排 + T骨牛排", price:289, img:"images/55.jpg"},
            {name:"猪肉 + 猪排 + 猪颈肉", price:339, img:"images/56.jpg"},
            {name:"三文鱼 + T骨牛排", price:339, img:"images/57.jpg"},
            {name:"猪排 + T骨牛排 + 三文鱼", price:419, img:"images/58.jpg"},
            {name:"优质牛肉 + 肋眼牛排 + T骨牛排", price:389, img:"images/59.jpg"},
            {name:"鸡 + 猪肉 + 优质牛肉 + 鱼 + 三文鱼", price:459, img:"images/60.jpg"},
            {name:"三文鱼 + 猪排 + 肋眼牛排", price:349, img:"images/61.jpg"},
            {name:"鱼 + 鸡肉 + 猪排 + 猪颈肉 + 肋眼牛排 + T骨牛排", price:599, img:"images/62.jpg"}
        ]
    }
};


// Mapping ชื่อเมนู → แต่ละภาษา
const nameMapping = {
    "Spaghetti Carbonara": { th:"สปาเก็ตตี้คาโบนาร่า", en:"Spaghetti Carbonara", zh:"卡邦尼意大利面" },
    "Spaghetti with Spicy Thai Basil Sauce Pork": { th:"สปาเก็ตตี้ซอสขี้เมาหมู", en:"Spaghetti with Spicy Thai Basil Sauce Pork", zh:"泰式罗勒辣酱猪肉意大利面" },
    "Spaghetti with Tomato Sauce and Minced Pork": { th:"สปาเก็ตตี้ซอสมะเขือเทศหมูสับ", en:"Spaghetti with Tomato Sauce and Minced Pork", zh:"番茄酱猪肉末意大利面" },
    "Spaghetti with Tomato Sauce and Minced Chicken": { th:"สปาเก็ตตี้ซอสมะเขือเทศไก่สับ", en:"Spaghetti with Tomato Sauce and Minced Chicken", zh:"番茄酱鸡肉末意大利面" },
    "Baked Spinach with Cheese": { th:"ผักโขมอบชีส", en:"Baked Spinach with Cheese", zh:"芝士焗菠菜" },
    "Thai-Style Sun-Dried Pork": { th:"หมูแดดเดียว", en:"Thai-Style Sun-Dried Pork", zh:"泰式风干猪肉" },
    "Creamy Mushroom Soup": { th:"ซุปเห็ด", en:"Creamy Mushroom Soup", zh:"奶油蘑菇汤" },
    "Creamy Spinach Soup": { th:"ซุปผักโขม", en:"Creamy Spinach Soup", zh:"奶油菠菜汤" },
    "Chicken Nuggets": { th:"นักเก็ต", en:"Chicken Nuggets", zh:"炸鸡块" },
    "French Fries": { th:"เฟรนช์ฟรายส์", en:"French Fries", zh:"炸薯条" },
    "Popcorn Chicke": { th:"ไก่ป๊อป", en:"Popcorn Chicke", zh:"爆米花鸡" },
    "Spicy Popcorn Chicken": { th:"ไก่ป๊อปสไปซี่", en:"Spicy Popcorn Chicken", zh:"香辣爆米花鸡" },
    "Fish & Chips": { th:"ฟิชแอนด์ชิปส์", en:"Fish & Chips", zh:"炸鱼薯条"},
    "Grilled Chicken Steak Rice Bowl": { th:"ข้าวหน้าสเต็กไก่ย่าง", en:"Grilled Chicken Steak Rice Bowl", zh:"烤鸡排盖饭"},
    "Rice with Grilled Pork Steak": { th:"ข้าวหน้าสเต็กหมูย่าง", en:"Rice with Grilled Pork Steak", zh:"烤猪排盖饭"},
    "Rice with Crispy Fried Chicken Steak": { th:"ข้าวหน้าสเต็กไก่ทอดกรอบ", en:"Rice with Crispy Fried Chicken Steak", zh:"炸鸡排盖饭"},
    "Rice with Grilled Pork Neck Steak": { th:"ข้าวหน้าสเต็กสันคอหมู", en:"Rice with Grilled Pork Neck Steak", zh:"猪颈肉盖饭"},
    "Thai Premium Beef Steak Rice": { th:"ข้าวหน้าสเต็กโคขุน", en:"Thai Premium Beef Steak Rice", zh:"优质牛排盖饭"},
    "Rice with Grilled Salmon Steak": {th:"ข้าวหน้าสเต็กแซลมอน", en:"Rice with Grilled Salmon Steak", zh:"三文鱼排盖饭"},
    "Rice with Crispy Fried Fish Steak": {th:"ข้าวหน้าปลาสเต็กทอดกรอบ", en:"Rice with Crispy Fried Fish Steak", zh:"炸鱼排盖饭"},
    "Japanese Grilled Saba Rice": { th:"ข้าวหน้าปลาซาบะญี่ปุ่นย่าง", en:"Japanese Grilled Saba Rice", zh:"日式烤鲭鱼盖饭"},
    "Rice with Pork Patty Steak": { th:"ข้าวหน้าสเต็กหมูบด", en:"Rice with Pork Patty Steak", zh:"猪肉饼盖饭"},
    "Rice with Beef Hamburger Steak": { th:"ข้าวหน้าสเต็กเนื้อบด", en:"Rice with Beef Hamburger Steak", zh:"牛肉饼盖饭"},
    "Southern Thai Spicy Pork Stir-Fry on Rice": { th:"ข้าวหมูคั่วกลิ้ง", en:"Southern Thai Spicy Pork Stir-Fry on Rice", zh:"泰南香辣猪肉炒饭"},
    "Salad with Crispy Fried Fish Steak": { th:"สลัดสเต็กปลาทอด", en:"Salad with Crispy Fried Fish Steak", zh:"炸鱼排沙拉"},
    "Salad with Grilled Chicken Breast Steak": { th:"สลัดสเต็กอกไก่ย่าง", en:"Salad with Grilled Chicken Breast Steak", zh:"烤鸡胸肉排沙拉"},
    "Salad with Grilled Pork Steak": { th:"สลัดสเต็กหมูย่าง", en:"Salad with Grilled Pork Steak", zh:"烤猪排沙拉"},
    "Fresh Garden Salad": { th:"สลัดผัก", en:"Fresh Garden Salad", zh:"蔬菜沙拉"},
    "Thai Premium Beef Steak": { th:"สเต็กเนื้อโคคุน", en:"Thai Premium Beef Steak", zh:"优质牛排"},
    "Grilled Ribeye Beef Steak": { th:"ริปอายสเต็กเนื้อ", en:"Grilled Ribeye Beef Steak", zh:"肉眼牛排"},
    "T-Bone Beef Steak": { th:"ที-โบน สเต็กเนื้อ", en:"T-Bone Beef Steak", zh:"T骨牛排"},
    "Japanese Saba Steak": { th:"สเต็กปลาซาบะ", en:"Japanese Saba Steak", zh:"鲭鱼排"},
    "Crispy Fried Fish Steak": { th:"สเต็กปลาทอด", en:"Crispy Fried Fish Steak", zh:"香脆炸鱼排"},
    "Grilled Fish Steak & Thai Spicy Dipping Sauce": { th:"สเต็กปลาย่างน้ำจิ้มซีฟู้ด", en:"Grilled Fish Steak & Thai Spicy Dipping Sauce", zh:"烤鱼排配泰式海鲜蘸酱"},
    "Salmon Steak": { th:"สเต็กปลาแซลมอน", en:"Salmon Steak", zh:"三文鱼排"},
    "pork chop": { th:"พอร์คชอพ", en:"Pork Chop", zh:"猪排" },
    "Spicy Pork Chop": { th:"พอร์คชอพซอสสไปซี่", en:"Spicy Pork Chop", zh:"香辣猪排" },
    "BBQ Pork Chop": { th:"พอร์คชอพซอสบาร์บีคิว", en:"BBQ Pork Chop", zh:"烧烤猪排" },
    "BBQ Ribs": { th:"ซี่โคครงบาร์บีคิว", en:"BBQ Ribs", zh:"烧烤排骨" },
    "Minced Pork Steak": { th:"สเต็กหมูบด", en:"Minced Pork Steak", zh:"猪肉汉堡排" },
    "Minced Beef Steak": { th:"สเต็กเนื้อบด", en:"Minced Beef Steak", zh:"牛肉汉堡排" },
    "Chicken Steak": { th:"สเต็กไก่", en:"Chicken Steak", zh:"鸡排" },
    "Spicy Chicken Thigh": { th:"สะโพกไก่สไปซี่", en:"Spicy Chicken Thigh", zh:"香辣鸡腿" },
    "BBQ Chicken Steak": { th:"สเต็กไก่ซอสบาร์บีคิว", en:"BBQ Chicken Steak", zh:"烧烤酱鸡排" },
    "Spicy Chicken Steak": { th:"สเต็กไก่ซอสสไปซี่", en:"Spicy Chicken Steak", zh:"香辣鸡排" },
    "Pork Steak": { th:"สเต็กหมู", en:"Pork Steak", zh:"猪排" },
    "Pork Steak BBQ Sauce": { th:"สเต็กหมูซอสบาร์บีคิว", en:"Pork Steak BBQ Sauce", zh:"烧烤酱猪排" },
    "Pork Steak Spicy Sauce": { th:"สเต็กหมูซอสสไปซี่", en:"Pork Steak Spicy Sauce", zh:"香辣猪排" },
    "Spicy Pork Steak": { th:"สเต็กหมูสไปซี่", en:"Spicy Pork Steak", zh:"香辣酱猪排" },
    "Pork Blade Steak": { th:"สเต็กสันคอหมู", en:"Pork Blade Steak", zh:"猪颈肉排" },
    "Pork Blade Steak BQQ Sauce": { th:"สเต็กสันคอหมูซอสบาร์บีคิว", en:"Pork Blade Steak BBQ Sauce", zh:"烧烤酱猪颈肉排" },
    "Pork Blade Steak Spicy Sauce": { th:"สเต็กสันคอหมูซอสสไปซี่", en:"Pork Blade Steak Spicy Sauce", zh:"香辣猪颈肉排" },
    "Pork Burger": { th:"เบอร์เกอร์หมู", en:"Pork Burger", zh:"猪肉汉堡" },
    "Beef Burger": { th:"เบอร์เกอร์เนื้อ", en:"Beef Burger", zh:"牛肉汉堡" },
    "Chicken+Fish+Pork": { th:"ไก่ + ปลา + หมู", en:"Chicken + Fish + Pork", zh:"鸡 + 鱼 + 猪肉" },
    "Chicken+Fish+Premium Beef": { th:"ไก่ + ปลา + โคขุน", en:"Chicken + Fish + Premium Beef", zh:"鸡 + 鱼 + 优质牛肉" },
    "Chicken + Premium Beef + Pork Chop + Fish": { th:"ไก่ + โคขุน + พอร์คชอพ + ปลา", en:"Chicken + Premium Beef + Pork Chop + Fish", zh:"鸡 + 优质牛肉 + 猪排 + 鱼"},
    "Pork Blade + Fish": { th:"สันคอ + ปลา", en:"Pork Blade + Fish", zh:"猪颈肉 + 鱼" },
    "Pork Chop + Premium Beef": { th:"พอร์คชอพ + โคขุน", en:"Pork Chop + Premium Beef", zh:"猪排 + 优质牛肉" },
    "Pork Chop + T-Bone Steak": { th:"พอร์คชอพ + ทีโบน", en:"Pork Chop + T-Bone Steak", zh:"猪排 + T骨牛排" },
    "Pork + Pork Chop + Pork Blade": { th:"หมู + พอร์คชอพ + สันคอ", en:"Pork + Pork Chop + Pork Blade", zh:"猪肉 + 猪排 + 猪颈肉"},
    "Salmon + T-Bone Steak": { th:"แซลมอน + ทีโบน", en:"Salmon + T-Bone Steak", zh:"三文鱼 + T骨牛排" },
    "Pork Chop + T-Bone Steak + Salmon": { th: "พอร์คชอพ + ทีโบน + แซลมอน", en: "Pork Chop + T-Bone Steak + Salmon", zh: "猪排 + T骨牛排 + 三文鱼"},
    "Premium Beef + Ribeye + T-Bone Steak": { th: "โคขุน + ริบอาย + ทีโบน", en: "Premium Beef + Ribeye + T-Bone Steak", zh: "优质牛肉 + 肋眼牛排 + T骨牛排"},
    "Chicken + Pork + Premium Beef + Fish + Salmon": { th: "ไก่ + หมู + โคขุน + ปลา + แซลม่อน", en: "Chicken + Pork + Premium Beef + Fish + Salmon", zh: "鸡 + 猪肉 + 优质牛肉 + 鱼 + 三文鱼"},
    "Salmon + Pork Chop + Ribeye Steak": { th: "แซลมอน + พอร์คชอพ + ริบอาย", en: "Salmon + Pork Chop + Ribeye Steak", zh: "三文鱼 + 猪排 + 肋眼牛排"},
    "Fish + Chicken + Pork Chop + Pork Blade + Ribeye + T-Bone Steak": { th: "ปลา + ไก่ + พอร์คชอพ + สันคอ + ริบอาย + ทีโบน", en: "Fish + Chicken + Pork Chop + Pork Blade + Ribeye + T-Bone Steak", zh: "鱼 + 鸡肉 + 猪排 + 猪颈肉 + 肋眼牛排 + T骨牛排"}
};

// ตะกร้า UI ข้อความหลายภาษา
const cartText = {
    th: { cartTitle:"ตะกร้าสินค้า", emptyCart:"ตะกร้าว่าง", total:"รวมทั้งหมด" },
    en: { cartTitle:"Shopping Cart", emptyCart:"Cart is empty", total:"Total" },
    zh: { cartTitle:"购物车", emptyCart:"购物车为空", total:"总计" }
};

// สร้างเมนู
function setLanguage(newLang){
    lang = newLang;
    const dict = dictionary[lang];
    document.querySelector("header h1").innerText = dict.header;
    document.querySelector("#cartDiv h2").innerText = cartText[lang].cartTitle;
    document.getElementById("orderBtn").innerText = dict.orderBtn;

    const menuDiv = document.querySelector(".menu");
    menuDiv.innerHTML = "";
    dict.menu.forEach(item=>{
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} บาท</p>
            <button onclick="addToCart('${item.name}',${item.price})">${dict.orderBtn}</button>
        `;
        menuDiv.appendChild(card);
    });

    renderCart();
}

// ตะกร้า
const cartItems = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");

function addToCart(name, price){
    // หา key จากชื่อในทุกภาษา
    let key = Object.keys(nameMapping).find(k =>
        k === name || nameMapping[k].th === name || nameMapping[k].zh === name
    ) || name;

    const existing = cart.find(i => i.key === key);
    if(existing) existing.qty += 1;
    else cart.push({key, price, qty:1});

    renderCart();
}

function renderCart(){
    cartItems.innerHTML="";
    let total = 0;

    if(cart.length===0){
        const empty = document.createElement("div");
        empty.innerText = cartText[lang].emptyCart;
        cartItems.appendChild(empty);
    } else {
        cart.forEach((item,index)=>{
            const itemTotal = item.price * item.qty;
            total += itemTotal;

            // แสดงชื่อเมนูตามภาษาที่เลือก
            let displayName = nameMapping[item.key] ? nameMapping[item.key][lang] : item.key;

            const div = document.createElement("div");
            div.className="cart-item";
            div.innerHTML = `
                <span>${displayName}</span>
                <span>
                    <button class="qty-btn" onclick="changeQty(${index},-1)">➖</button>
                    <span class="qty">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${index},1)">➕</button>
                    | ${itemTotal} บาท
                    <button class="remove-btn" onclick="removeItem(${index})">❌</button>
                </span>
            `;
            cartItems.appendChild(div);
        });
    }

    totalSpan.innerText = total;
    document.querySelector("#cartDiv .total span").previousSibling.textContent = cartText[lang].total + ": ";
}

// ฟังก์ชันเพิ่ม/ลดจำนวน
function changeQty(index, delta){
    cart[index].qty += delta;
    if(cart[index].qty <= 0) cart.splice(index,1);
    renderCart();
}

// ลบรายการ
function removeItem(index){
    cart.splice(index,1);
    renderCart();
}

// สั่งอาหาร
// ข้อความแจ้งเตือนหลายภาษา
const orderSuccessText = {
    th: "สั่งอาหารเรียบร้อยแล้ว!",
    en: "Order placed successfully!",
    zh: "點餐成功！"
};

// สั่งอาหารและพิมพ์ใบเสร็จอัตโนมัติ
function orderFood(){
    if(cart.length === 0){
        alert(dictionary[lang].emptyCart); // แจ้งเตือนถ้าตะกร้าว่าง
        return;
    }

    // แจ้งเตือนตามภาษาที่เลือก
    alert(orderSuccessText[lang]);

    // ซ่อนหน้าจอ POS และแสดงใบเสร็จ
    document.getElementById("posContainer").style.display = "none";
    const receiptDiv = document.getElementById("receiptDiv");
    receiptDiv.style.display = "block";


if (!tableNumber) {
    alert("กรุณาเลือกโต๊ะก่อนสั่งอาหาร");
    return;
}

document.getElementById("tableNumber").innerText =
`${receiptText['th'].tableNumber}: ${tableNumber}`;

    document.getElementById("tableNumber").innerText = `${receiptText['th'].tableNumber}: ${tableNumber}`;

    // แสดงรายการอาหารในใบเสร็จเป็นภาษาไทย
    const receiptItemsDiv = document.getElementById("receiptItems");
    receiptItemsDiv.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const nameDisplay = nameMapping[item.key] ? nameMapping[item.key]['th'] : item.key; // ภาษาไทย
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement("div");
        div.className = "receipt-item";
        div.innerText = `${nameDisplay} x${item.qty} = ${itemTotal} บาท`;
        receiptItemsDiv.appendChild(div);
    });

    document.getElementById("grandTotal").innerText = subtotal;

    // สร้าง QR Code ภาษาไทย
    const qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = "";
    const now = new Date();
    const datetime = now.toLocaleString('th-TH', { hour12: false });
    const qrText = `สเต็กเด็กแนว\n${receiptText['th'].tableNumber}: ${tableNumber}\n${receiptText['th'].total}: ${subtotal} บาท\nวันที่/เวลา: ${datetime}`;
    QRCode.toCanvas(qrDiv, qrText);

    // สั่งพิมพ์ใบเสร็จภาษาไทยอัตโนมัติ
    printReceiptAuto(tableNumber, subtotal, receiptItemsDiv.innerHTML, qrText);
}

// ฟังก์ชันพิมพ์อัตโนมัติ
function printReceiptAuto(tableNumber, total, itemsHTML, qrText){
    let content = `<h2>${receiptText['th'].receiptTitle}</h2>`;
    content += `<p>${receiptText['th'].tableNumber}: ${tableNumber}</p>`;
    content += `<div>${itemsHTML}</div>`;
    content += `<p style="font-weight:bold;text-align:right;">${receiptText['th'].total}: ${total} บาท</p>`;

    const qrDiv = document.createElement("div");
    QRCode.toCanvas(qrDiv, qrText);

    const win = window.open('', '', 'width=400,height=600');
    win.document.write('<html><head><title>ใบเสร็จ</title></head><body>');
    win.document.write(content);
    win.document.body.appendChild(qrDiv);
    win.document.write('</body></html>');
    win.document.close();
    win.focus();
    win.print();  // พิมพ์อัตโนมัติ
    win.close();
}





// กลับเมนู
function backToPOS(){
    document.getElementById("receiptDiv").style.display="none";
    document.getElementById("posContainer").style.display="flex";
}

// โหลดเริ่มต้น
window.onload = ()=>{
    setLanguage('th');
};
