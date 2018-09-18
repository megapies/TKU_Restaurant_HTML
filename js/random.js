near_university = [
  "ร้านโลมาทอด",
  "ร้านหมีเบนโตะ",
  "ร้าน Eating",
  "ร้านพาสต้าคู่รัก",
  "ร้านแกงกระหรี่ขายแซนวิช",
  "ร้านอาหารญี่ปุ่น",
  "ร้านข้าวหน้าเป็ดลุงเชง"
]
near_dorm = [
  "ร้านข้าวหน้าเนื้อ",
  "ร้านตามสั่ง",
  "ร้านข้าวหมูแดง",
  "ร้านไก่ทอด",
  "ร้านบุฟเฟ่ข้าวราดแกง",
  "KFC",
  "7-11",
]
$(document).ready(function() {
  for(let i=0; i < near_university.length; i++){
    $("#near-university-block").append(
      `<div style='color:white;margin:0' class="col-12 col-sm-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rest-uni-${i}" name="rest" value="${near_university[i]}" checked />
          <label class="form-check-label" for="rest-uni-${i}">${near_university[i]}</label>
        </div>
      </div>`
    )
  }
  for(let i=0; i < near_dorm.length; i++){
    $("#near-dorm-block").append(
      `<div style='color:white;margin:0' class="col-12 col-sm-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rest-dorm-${i}" name="rest" value="${near_dorm[i]}" checked />
          <label class="form-check-label" for="rest-dorm-${i}">${near_dorm[i]}</label>
        </div>
      </div>`
    )
  }

  $("#btn-random").click(function(){
    
    let rests = $("input[name='rest']:checked")
    let rest = rests[Math.floor(Math.random()*rests.length)];
    console.log(rests)
    console.log(rest, rest.value)
    $("#result").text(rest.value)
  })
  
})