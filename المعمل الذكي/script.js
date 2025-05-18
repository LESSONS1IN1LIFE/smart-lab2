let labCapacity = 25;
let studentsCount = 0;

function checkLabCapacity() {
  studentsCount = document.getElementById('studentsCount').value;

  if (studentsCount >= labCapacity) {
    // المعمل ممتلئ
    document.getElementById('fullAlert').style.display = 'block';
    document.getElementById('doorStatusText').innerText = 'المعمل ممتلئ 🚫';
    
    // إخفاء صورة المعمل
    document.getElementById('labRoom').classList.remove('visible');
    
    // إظهار صورة الباب المغلق
    document.getElementById('doorStatusImage').classList.add('visible');

  } else {
    // المعمل متاح
    document.getElementById('fullAlert').style.display = 'none';
    document.getElementById('doorStatusText').innerText = 'المعمل متاح ✅';
    
    // إخفاء صورة الباب المغلق
    document.getElementById('doorStatusImage').classList.remove('visible');
    
    // إظهار صورة المعمل
    document.getElementById('labRoom').classList.add('visible');
  }
}

function saveSettings() {
  let capacity = document.getElementById('labCapacity').value;
  let devices = document.getElementById('numOfDevices').value;
  let chairs = document.getElementById('numOfChairs').value;

  if (capacity && devices && chairs) {
    labCapacity = capacity;
    alert('تم حفظ الإعدادات بنجاح');
  } else {
    alert('يرجى ملء جميع الحقول!');
  }
}

function verifyFingerprint() {
  // تخيل أننا نتحقق من البصمة هنا
  const fingerprintVerified = true; // هنا يمكنك تغيير القيمة حسب الحالة الحقيقية
  
  if (fingerprintVerified) {
    document.getElementById('fingerprintStatus').innerText = 'تم التحقق من البصمة بنجاح! ✅';
    alert('تم دخول المدرس بنجاح.');
  } else {
    document.getElementById('fingerprintStatus').innerText = 'فشل التحقق من البصمة. حاول مجددًا. ❌';
  }
  
}

