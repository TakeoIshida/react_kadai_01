// services/omikuji.service.js


// export const getGomidasi = async (query) => {
//     try {
//       return { yourday: query.myday, comday: "燃えるゴミの日", result: "パパ" };
//     } catch (e) {
//       throw Error("Error while getting gamidasi");
//     }
//   };

// export const getGomidasi = async (query) => {
//     try {
//       const gomiday = ["燃えるごみ", "燃えないゴミ", "紙ゴミ","ペットボトル","プラ"];
//       const today = ["月","火","水","木","金","土","日"]
//       if(today == 0){
//         gomiday(1);
//       }
      
//       const myIndex = gomiday.indexOf(query.myhand);
//       if (myIndex === -1) return { message: "Invalid hand..." };
//       const comIndex = gomiday.length;
//       const resultSheet = [
//         ["パパ", "ママ"],
//       ];
//       return {
//         yourHand: query.myhand,
//         comHand: gomiday[comIndex],
//         result: resultSheet[myIndex][comIndex],
//       };
//     } catch (e) {
//       throw Error("Error while getting Janken");
//     }
//   };

  // services/janken.service.js

export const getGomidasi = async (query) => {
    try {
    //   const hand = ["燃えるごみ", "燃えないゴミ", "紙ゴミ","ペットボトル","プラ"];
      const hand = ["月","火","水","木","金","土","日"]
      const myIndex = hand.indexOf(query.myhand);
      if (myIndex === -1) return { yourHand: query.myhand,message: "Invalid hand..." };
      if (myIndex === 0) return { yourHand: query.myhand,message: "燃えるゴミ" };
      if (myIndex === 1) return { yourHand: query.myhand,message: "燃えないゴミ" };
      if (myIndex === 2) return { yourHand: query.myhand,message: "紙ごみ" };
      if (myIndex === 3) return { yourHand: query.myhand,message: "ペットボトル" };
      if (myIndex === 4) return { yourHand: query.myhand,message: "プラゴミ" };
      if (myIndex === 5) return { yourHand: query.myhand,message: "ゴミ出せないよ" };
      if (myIndex === 6) return { yourHand: query.myhand,message: "ゴミ出せないよ" };
    //   const comIndex = Math.floor(Math.random() * 3);
    //   const resultSheet = [
    //     ["Draw", "Win", "Lose"],
    //     ["Lose", "Draw", "Win"],
    //     ["Win", "Lose", "Draw"],
    //   ];
    //   return {
    //     yourHand: query.myhand,
    //     comHand: hand[comIndex],
    //     result: resultSheet[myIndex][comIndex],
    //   };
    } catch (e) {
      throw Error("Error while getting Janken");
    }
  };