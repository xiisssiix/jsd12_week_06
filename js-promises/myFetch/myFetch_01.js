function getAirportByIATA(iataCode) {
  
  const url = `https://api.api-ninjas.com/v1/airports?iata=${iataCode}`;

  return fetch(url, {
    method: 'GET',
    headers: { 
      'X-Api-Key': 'ndAJs0yZu5K1WGxbN2hMqlps6n1759pPHJhDhU6l'
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // API นี้จะคืนค่ากลับมาเป็น Array แม้จะมีแค่ผลลัพธ์เดียว
    // เราจึงควรส่ง data[0] กลับไปถ้าเจอข้อมูล
    return data.length > 0 ? data[0] : null;
  });
}

// --- ลองเรียกใช้งาน ---

getAirportByIATA("BKK") // ลองหาด้วยรหัส IATA ของสุวรรณภูมิ
  .then((airport) => {
    if (airport) {
      console.log(`--- ข้อมูลสนามบิน (${airport.iata}) ---`);
      console.log(`ชื่อ: ${airport.name}`);
      console.log(`เมือง: ${airport.city}`);
      console.log(`ประเทศ: ${airport.country}`);
      console.log(`เขตเวลา: ${airport.timezone}`);
    } else {
      console.log("ไม่พบข้อมูลสนามบินนี้");
    }
  })
  .catch((error) => {
    console.error("เกิดข้อผิดพลาด:", error);
  });