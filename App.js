import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableWithoutFeedback, ScrollView   } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './components/ProductList'; 
import ShoppingCartButtons from './components/ShoppingCartButtons';
const productsData = {
  data: {
    items: [
      {
        "id": "GGOEAFKA087499",
        "name": "Android Small Removable Sticker Sheet",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
        "price": "2.99",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "url": "Android+Small+Removable+Sticker+Sheet",
        "category": "accessories",
        "subcategory": "accessories",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEAFKA087599",
        "name": "Android Large Removable Sticker Sheet",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
        "price": "2.99",
        "keywords": "Android Large Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, large sticker sheet, android large sticker sheets, Android Sheet",
        "url": "Android+Large+Removable+Sticker+Sheet",
        "category": "accessories",
        "subcategory": "accessories",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEGFKA086699",
        "name": "Google Emoji Sticker Pack",
        "description": "Who doesn't use emojis? Decorate your space with your current mood!",
        "features": "<p>Pack contains two sticker sheets</p>\n<p>Each Sheet has different emojis</p>\n<p><span>Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.</span></p>",
        "price": "4.99",
        "keywords": "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
        "url": "Google+Emoji+Sticker+Pack+2+sheet",
        "category": "accessories",
        "subcategory": "accessories",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEWCKQ085457",
        "name": "Waze Pack of 9 Decal Set",
        "description": "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
        "features": "<p>Pack of 9 includes:</p>\n<p>3 Waze Mood Happy decals</p>\n<p>3 Waze Mood Original decals</p>\n<p>3 Waze Mood Ninja decals</p>",
        "price": "16.99",
        "keywords": "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
        "url": "Waze+Pack+of+9+decal+set",
        "category": "accessories",
        "subcategory": "accessories",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEGHPB071610",
        "name": "Google Twill Cap",
        "description": "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
        "features": "<p>Heavy weight brushed twill</p>\n<p>Adjustable velcro closure</p>\n<p>One size fits all</p>",
        "price": "10.99",
        "keywords": "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
        "url": "Google+Twill+Cap",
        "category": "apparel",
        "subcategory": "apparel",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEGHPJ094299",
        "name": "Google Fold-over Beanie Grey",
        "description": "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
        "features": "<p>100% acrylic</p>\n<p>One size fits all</p>",
        "price": "9.99",
        "keywords": "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
        "url": "Google+Fold+over+beanie+grey",
        "category": "apparel",
        "subcategory": "apparel",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEGHPJ094399",
        "name": "Google Pom Beanie Charcoal",
        "description": "Stay stylish and warm this winter season with this Google Pom Beanie.",
        "features": "<p>Thick knit texture outside</p>\n<p>Soft plush inside</p>\n<p>Faux fur pom on top</p>",
        "price": "19.99",
        "keywords": "Google Pom Beanie Charcoal, pom beanie, charcoal pom beanies, Google Beanies, Pom Beanies, charcoal Google pom, beanies, headgear",
        "url": "Google+Pom+Beanie+Charcoal",
        "category": "apparel",
        "subcategory": "apparel",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEWXXX0827",
        "name": "Waze Women's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
        "price": "18.99",
        "keywords": "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
        "url": "Waze+Womens+Short+Sleeve+Tee",
        "category": "apparel",
        "subcategory": "apparel",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEWXXX0828",
        "name": "Waze Men's Short Sleeve Tee",
        "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        "features": "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
        "price": "18.99",
        "keywords": "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees, Waze Men's tee, waze mens tees, waze mens tee, waze short sleeve tees, waze short sleeve tee",
        "url": "Waze+Mens+Short+Sleeve+Tee",
        "category": "apparel",
        "subcategory": "apparel",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
      {
        "id": "GGOEGBRJ037399",
        "name": "Google Rucksack",
        "description": "Choose to carry your belongings and presentations to your next meeting with the Google Mistral Rucksack!",
        "features": "<p>Size: 13.5 x 6.5 x 17.5</p>\n<p>Ergonomic padded shoulder straps</p>\n<p>Large main compartment with internal laptop compartment</p>\n<p>Easy Snap and Adjustable straps for main compartment access</p>",
        "price": "79.99",
        "keywords": "Mistral Rucksack, Mistral backpack, Mistral Backpack, backpack, bags, bag, Backpack, backpacks, packs, office gear, Bag, Bags, Google Backpack, google backpack, g, google",
        "url": "Google+Rucksack",
        "category": "bags",
        "subcategory": "bags",
        "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
      },
       {
          "id": "GGOEGDHJ087399",
          "name": "Google Rolltop Backpack Blue",
          "description": "This stylish Google rolltop backpack will help keep all of your favorite items organized and together while you're on the move.",
          "features": "<p>Size: 12 inches wide x 18.5 inches height x 5.3 inches depth</p>\n<p>TPU Liner</p>\n<p>Internal Organizer for Pens, Phones and Other Small Items</p>\n<p>Large Main Compartment</p>\n<p>Flap Closure for Quick Access or Roll-Top for Expandable Volume and Weather Protection</p>",
          "price": "149.99",
          "keywords": "Google Rolltop Backpack Blue, google backpack, google blue backpack, blue rolltop, Google rolltop, Blue Backpack, backpack, rolltop",
          "url": "Google+Rolltop+Backpack+Blue",
          "category": "bags",
          "subcategory": "bags",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEADHB085999",
          "name": "Android Trace Bottle Black",
          "description": "Stay hydrated throughout the day with this Android Trace Bottle. 17 oz.",
          "features": "<p>17 oz. double wall thermal bottle</p>\n<p>Stainless steel</p>\n<p>Threaded stainless steel insulated lid</p>\n<p>Copper vacuum insulation</p>",
          "price": "23.99",
          "keywords": "Android Black Force 17 oz Bottle, android bottles, android black bottle, android 17 oz bottle, android black force bottle, android 17 oz Android Black Force Bottle, Android Trace Bottle Black",
          "url": "Android+Black+Force+17oz+bottle",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEADHB086299",
          "name": "Android Trace Mug Black",
          "description": "Start your day off right with that perfect cup of coffee using this Android Trace Mug Black.",
          "features": "<p>12 oz. stoneware</p>\n<p>Matte finish</p>",
          "price": "9.99",
          "keywords": "Android Black C-Handle Mug, android mugs, black android mug, c handle mug, android c handle,Android Trace Mug Black,",
          "url": "Android+Trace+Mug+Black",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGDHC087099",
          "name": "Google Thermal Bottle Blue",
          "description": "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
          "features": "<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>",
          "price": "23.99",
          "keywords": "Google Thermal Bottle Blue, Google, google thermal bottle blue, Google Blue, Thermal Bottle Blue,",
          "url": "Google+Thermal+Bottle+Blue",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGDHH087299",
          "name": "Google Thermal Bottle Green",
          "description": "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
          "features": "<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>",
          "price": "23.99",
          "keywords": "Google Thermal Bottle Green, Google, google thermal bottle green, Google Green, Thermal Bottle Green,",
          "url": "Google+Thermal+Bottle+Green",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGDHQ093399",
          "name": "Google Thermal Bottle White",
          "description": "Insulated to keep contents hot or cold for hours, this Google bottle is a great year-round companion. 17 oz.",
          "features": "<p>17 oz</p>\n<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>",
          "price": "23.99",
          "keywords": "Google Thermal Bottle White , Google bottles, white bottle, thermal bottle white, thermal bottle with box, thermal bottle white with box, Google drinkware",
          "url": "Google+Thermal+Bottle+White+with+box",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGDHR086999",
          "name": "Google Thermal Bottle Red",
          "description": "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
          "features": "<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>",
          "price": "23.99",
          "keywords": "Google Thermal Bottle Red, Google, google thermal bottle red, Google Red, Thermal Bottle Red,",
          "url": "Google+Thermal+Bottle+Red",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
         {
          "id": "GGOEGDHT087199",
          "name": "Google Thermal Bottle Yellow",
          "description": "Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.",
          "features": "<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>",
          "price": "23.99",
          "salePrice": "19.99",
          "keywords": "Google Thermal Bottle Yellow, Google, google thermal bottle yellow, Google Yellow, Thermal Bottle Yellow,",
          "url": "Google+Thermal+Bottle+Yellow",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGDWQ087699",
          "name": "Google Hub Mug White",
          "description": "Enjoy a cup of coffee or tea with this Google stoneware mug.",
          "features": "<p>16 oz. Stoneware</p>\n<p>Hand wash recommended</p>\n<p>Microwave safe</p>",
          "price": "12.99",
          "keywords": "Google Hub Mug White, Google Mugs, hub mug white, Google White Mugs, mugs, white mug, hub white mug, Google White Hub Mug",
          "url": "Google+Hub+Mug+White",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEYDHB086099",
          "name": "YouTube Transmission Bottle Black",
          "description": "Keep your favorite drink cold during those long workouts with this YouTube Transmission Bottle. 17 oz.",
          "features": "<p>17 oz. double wall thermal bottle</p>\n<p>Stainless steel</p>\n<p>Threaded stainless steel insulated lid</p>\n<p>Copper vacuum insulation</p>",
          "price": "23.99",
          "keywords": "Play Black Force 17oz Bottle, youtube 17 oz bottle, play back bottle, play back force bottle, 17 oz bottles, youtube black force YouTube Play Black Force Bottle YouTube Transmission Bottle Black",
          "url": "Play+Black+Force+17oz+bottle",
          "category": "drinkware",
          "subcategory": "drinkware",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGAPB087899",
          "name": "Google Snapback Black Cap",
          "description": "Stay shaded on those sunny days wearing this stylish Google snapback hat.",
          "features": "<p>Snapback Closure</p>\n<p>One size fits most</p>",
          "price": "19.99",
          "keywords": "Google Snapback Black Cap, google caps, google snapback, google black cap, snapback black caps, google cap, black cap, black hat, Google Hat",
          "url": "Google+Snapback+Black+Cap",
          "category": "apparel",
          "subcategory": "headgear",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGAPL087999",
          "name": "Google Snapback Navy Cap",
          "description": "Stay shaded on those sunny days wearing this stylish Google snapback hat.",
          "features": "<p>Snapback Closure</p>\n<p>One size fits most</p>",
          "price": "19.99",
          "keywords": "Google Snapback navy Cap, google caps, google snapback, google navy cap, snapback navy caps, google cap, navy cap, navy hat, Google Hat",
          "url": "Google+Snapback+Navy+Cap",
          "category": "apparel",
          "subcategory": "headgear",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGAMC088199",
          "name": "Google Cappy Bib Blue",
          "description": "Keep your little Googler stain free with this Google Cappy Bib.",
          "features": "<p>Machine washable</p>\n<p>100% cotton</p>",
          "price": "13.99",
          "salePrice": "11.99",
          "keywords": "Google Cappy Bib Blue, Google bibs, blue bib, cappy bib, cappy blue bib, blue google bib",
          "url": "Google+Cappy+Bib+Blue",
          "category": "apparel",
          "subcategory": "kid's",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGAMC088399",
          "name": "Google Mustachio Bib Blue",
          "description": "Avoid food ending up on your little one with this Google Mustachio Bib.",
          "features": "<p>Machine washable</p>\n<p>100% cotton</p>",
          "price": "13.99",
          "keywords": "Google Mustachio Bib Blue, Google bibs, blue bib, mustachio bib, mustachio blue bib, blue google bib",
          "url": "Google+Mustachio+Bib+Blue",
          "category": "apparel",
          "subcategory": "kid's",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGAMQ088099",
          "name": "Google Cappy Bib White",
          "description": "Keep your little Googler stain free with this Google Cappy Bib.",
          "features": "<p>Machine washable</p>\n<p>100% cotton</p>",
          "price": "13.99",
          "keywords": "Google Cappy Bib White, Google bibs, white bib, cappy bib, cappy white bib, white google bib",
          "url": "Google+Cappy+Bib+White",
          "category": "apparel",
          "subcategory": "kid's",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
         {
          "id": "GGOEYXXX0895",
          "name": "YouTube Kids Tee White",
          "description": "This 100% cotton YouTube short sleeve t-shirt is perfect for kids to wear to school or while playing.",
          "features": "<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>",
          "price": "19.99",
          "keywords": "YouTube Kids Tee White, YouTube Tee, YouTube Kids Tee, YouTube White Tee, Kids Tee White, White Kids Tee, YouTube Kids Tee White",
          "url": "YouTube+Kids+Tee+White",
          "category": "apparel",
          "subcategory": "kid's",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEYXXX0896",
          "name": "YouTube Kids Tee Black",
          "description": "This 100% cotton YouTube short sleeve t-shirt is perfect for kids to wear to school or while playing.",
          "features": "<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>",
          "price": "19.99",
          "keywords": "YouTube Kids Tee Black, YouTube Tee, YouTube Kids Tee, YouTube Black Tee, Kids Tee Black, Black Kids Tee, YouTube Kids Tee Black",
          "url": "YouTube+Kids+Tee+Black",
          "category": "apparel",
          "subcategory": "kid's",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEYXXX0897",
          "name": "YouTube Kids Onesie White",
          "description": "This 100% cotton YouTube Onesie for your baby will keep them comfortable with non-binding sleeves for full freedom of movement.",
          "features": "<p>100% cotton</p>\n<p>Snaps at crotch</p>\n<p>Non-binding sleeves and neck</p>",
          "price": "25.99",
          "keywords": "YouTube Kids Onesie White, YouTube Kids White, YouTube Onesie White, YouTube Onesie, kids onesie white, youtube",
          "url": "YouTube+Kids+Onesie+White",
          "category": "apparel",
          "subcategory": "kid's",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEAKDH019899",
          "name": "Windup Android",
          "description": "Go ahead and wind up in true Android fashion with this fun windup toy!",
          "features": "<p>Cool android shape</p>\n<p>Wind up and watch it walk forward</p>\n<p>Has over-wind protection</p>\n<p>Fun wind-up robot for ages 3 and above</p>",
          "price": "3.99",
          "keywords": "Windup Android, android toy, android windup toy, windup android toy, Windup Android toy, Google Windup Android Toy, google android toy, google, Google, Google Android Toy, Google android toy, android toy",
          "url": "Windup+Android",
          "category": "accessories",
          "subcategory": "lifestyle",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGAAX0037",
          "name": "Google Sunglasses",
          "description": "Although these are no Google glasses, they will still make your day fun at the beach!",
          "features": "<p>Made of Polycarbonate Material</p>\n<p>UV400 Lenses Provide 100% UVA And UVB Protection</p>\n<p>Come in the following colors: Red, Green, Blue</p>",
          "price": "3.50",
          "keywords": "Malibu Sunglasses, sunglasses, apparel, fun, Malibu sunglasses, sunglass, sun, weather glasses, weather, Weather, Google, g, google, google malibu sunglasses, Google Malibu sunglasses",
          "url": "Malibu+Sunglasses",
          "category": "accessories",
          "subcategory": "lifestyle",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGFSR022099",
          "name": "Google Mini Kick Ball",
          "description": "Kick this Google Mini Kick Ball around to take a break from the hustle and bustle. Fun for all ages!",
          "features": "<p>Classic hacky sack type ball</p>\n<p>Google Logo printed on the front</p>\n<p>2 inch diameter</p>",
          "price": "1.99",
          "keywords": "Kick Ball, Full Color Digital, Full color digital kick ball, kick ball, Kick Ball, Google Kick Ball, Google Kick Balls, kick balls, fitness, Fitness, Google kick ball, google, google kick ball, google Kick Ball, Google Kick Ball, Google Mini Kick Ball, mini kick, mini ball",
          "url": "Google+Kick+Ball",
          "category": "accessories",
          "subcategory": "lifestyle",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGPJC019099",
          "name": "7 inch Dog Frisbee",
          "description": "Take your furry friend to the park and play the day away with this 7 inch Dog Safe Flyer!",
          "features": "<p>Dog-safe &amp; Child safe Flyer</p>\n<p>Molded from soft, durable polyethylene</p>\n<p>Made in the USA FDA Compliant</p>",
          "price": "1.50",
          "keywords": "7 inch Dog Safe Flyer, flyer, flyers, dog flyer, dog toys, dog, pet toy, google pet toy, Google pet toy, google pet toy, pet safe flyer, flyers",
          "url": "7+inch+Dog+Safe+Flyer+bl",
          "category": "accessories",
          "subcategory": "lifestyle",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
         {
          "id": "GGOEGOLC014299",
          "name": "Google Metallic Notebook Set",
          "description": "A stunning notebook set that will inspire all writers!",
          "features": "<p>Spiral bound 70-page lined notebook with 2.0 mm thick solid metallic textured cover</p>\n<p>Elastic pen strap, includes color coordinating</p>\n<p>Economy Stylus with black ink and capacitive touch stylus</p>",
          "price": "5.99",
          "keywords": "Blue Metallic Textured Spiral Notebook Set , Mercury Notebook Sets, notebook, notebooks, journal, journals, google mercury notebook set, mercury notebooks, office, office supplies",
          "url": "Google+Metallic+Notebook+Set",
          "category": "office",
          "subcategory": "office",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEWFKA082999",
          "name": "Waze Baby on Board Window Decal",
          "description": "Get on board with the Waze wave and let everyone know you're carrying precious cargo with this new Waze inchBaby on Board inch decal.",
          "features": "<p>Vinyl decal</p>\n<p>6 inch size inch</p>",
          "price": "2.99",
          "keywords": "Waze Baby on Board Window Decal, Waze Decals, waze baby on board window decal, waze baby decals",
          "url": "Waze+Baby+on+Board+Window+Decal",
          "category": "shop by brand",
          "subcategory": "waze",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEWFKA083099",
          "name": "Waze Mood Happy Window Decal",
          "description": "If you're happy and you know it, show it off with this Waze happy mood window decal.",
          "features": "<p>Vinyl decal</p>\n<p>4 inch size inch</p>",
          "price": "1.99",
          "keywords": "Waze Mood Happy Window Decal, Waze Decals, Waze Happy Window Decals, waze decal, waze decals",
          "url": "Waze+Mood+Happy+Window+Decal",
          "category": "shop by brand",
          "subcategory": "waze",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEWFKA083199",
          "name": "Waze Mood Original Window Decal",
          "description": "You're an original. Let everyone know with this original Waze mood window decal.",
          "features": "<p>Vinyl decal</p>\n<p>4 inch size inch</p>",
          "price": "1.99",
          "keywords": "Waze Mood Original Window Decal, Waze Decals, Waze Decal, waze mood original window decal, waze mood original window decals",
          "url": "Waze+Mood+Original+Window+Decal",
          "category": "shop by brand",
          "subcategory": "waze",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEWFKA083299",
          "name": "Waze Mood Ninja Window Decal",
          "description": "You're a master of stealth. So let everyone know! Get this Waze ninja mood window decal and advertise your commitment to the secret ninja ways!",
          "features": "<p>Vinyl decal</p>\n<p>4 inch size inch</p>",
          "price": "1.99",
          "keywords": "Waze Mood Ninja Window Decal, Waze Decals, Waze Decal, waze mood ninja window decal, waze mood ninja window decals",
          "url": "Waze+Mood+Ninja+Window+Decal",
          "category": "shop by brand",
          "subcategory": "waze",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEWXXX0834",
          "name": "Waze Women's Typography Short Sleeve Tee",
          "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
          "features": "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
          "price": "18.99",
          "keywords": "Waze Women's Typography Short Sleeve Tee, Waze Women's Tees, Waze Typography Tees, Waze Short Sleeve Tees, Waze Tees, Waze tee, waze women's typography short sleeve tee, waze short sleeve tees women's, women's waze tees,",
          "url": "Waze+Womens+Typography+Short+Sleeve+Tee",
          "category": "shop by brand",
          "subcategory": "waze",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEWXXX0835",
          "name": "Waze Men's Typography Short Sleeve Tee",
          "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
          "features": "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
          "price": "18.99",
          "keywords": "Waze Men's Typography Short Sleeve Tee, Waze Men's Tees, Waze Typography Tees, Waze Short Sleeve Tees, Waze Tees, Waze tee, waze men's typography short sleeve tee, waze short sleeve tees men's, men's waze tees,",
          "url": "Waze+Mens+Typography+Short+Sleeve+Tee",
          "category": "shop by brand",
          "subcategory": "waze",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGXXX0903",
          "name": "Google Tee White",
          "description": "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex sizing.",
          "features": "<p>Unisex sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>",
          "price": "21.99",
          "keywords": "Google Tee White, google white, google tees, tee white, white tees, Google Tee White",
          "url": "Google+Tee+White",
          "category": "apparel",
          "subcategory": "women's-T-Shirts",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGXXX0904",
          "name": "Google Tee Red",
          "description": "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex Sizing.",
          "features": "<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>",
          "price": "21.99",
          "keywords": "Google Tee Red, google red, google tees, tee red, red tees, Google Tee Red",
          "url": "Google+Tee+Red",
          "category": "apparel",
          "subcategory": "women's-T-Shirts",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGXXX0905",
          "name": "Google Tee Yellow",
          "description": "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex Sizing.",
          "features": "<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>",
          "price": "21.99",
          "keywords": "Google Tee Yellow, google yellow, google tees, tee yellow, yellow tees, Google Tee Yellow",
          "url": "Google+Tee+Yellow",
          "category": "apparel",
          "subcategory": "women's-T-Shirts",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGXXX0906",
          "name": "Google Tee Green",
          "description": "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the google logo across the chest. Unisex sizing.",
          "features": "<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>",
          "price": "21.99",
          "keywords": "Google Tee Green, google green, google tees, tee green, green tees, Google Tee Green",
          "url": "Google+Tee+Green",
          "category": "apparel",
          "subcategory": "women's-T-Shirts",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        {
          "id": "GGOEGXXX0907",
          "name": "Google Tee Blue",
          "description": "100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the google logo across the chest. Unisex sizing.",
          "features": "<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>",
          "price": "21.99",
          "keywords": "Google Tee Blue, google blue, google tees, tee blue, blue tees, Google Tee Blue",
          "url": "Google+Tee+Blue",
          "category": "apparel",
          "subcategory": "women's-T-Shirts",
          "images": ["https://picsum.photos/640/360", "https://picsum.photos/640/360", "https://picsum.photos/640/360"]
        },
        
        
      // ... (you can continue adding more products here)
    ],
  },
};

const Stack = createStackNavigator();

const ProductApp = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const ProductList = ({navigation}) => {
    return <View style={styles.container}>
      <FlatList
        data={productsData.data.items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ProductListItem item={item} navigation={navigation}/>}
      />
    </View>
  };
  
  const ProductListItem = ({item, navigation}) => {
    return (
    <TouchableWithoutFeedback onPress={() => {
      setSelectedItem(item);
      navigation.navigate('Product Details', { product: item });
    }}>
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <View style={styles.productDetails} >
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
      </View>
      <ShoppingCartButtons item={item} quantity={cartItems.filter((prod) => prod.id === item.id).length} onAddItem={addToCart} onRemoveItem={removeFromCart} />
    </View>
    </TouchableWithoutFeedback>
  )};

  const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Features:</Text>
          <Text style={styles.featuresText} dangerouslySetInnerHTML={{ __html: product.features }} />
        </View>
      </View>
    </ScrollView>
  );
};


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product List">
        <Stack.Screen name="Product List" component={ProductList} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71', // Green color for price
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  featuresContainer: {
    marginTop: 16,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuresText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProductApp;
