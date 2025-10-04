const vaccineRateInput = document.getElementById("vaccineRate");
const vaccinePercent = document.getElementById("vaccinePercent");
const ctx = document.getElementById("vaccineChart").getContext("2d");

// بيانات مبدئية: عدد الإصابات حسب الأيام
const days = ["اليوم 1","اليوم 2","اليوم 3","اليوم 4","اليوم 5","اليوم 6","اليوم 7"];
let infections = [100,120,150,180,200,220,240]; // عدد إصابات بدون تطعيم

// إنشاء الرسم البياني
const vaccineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            label: 'عدد الإصابات',
            data: infections,
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.2)',
            tension: 0.3
        }]
    },
    options: {
        responsive:true,
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'عدد الإصابات' }
            },
            x: {
                title: { display: true, text: 'الأيام' }
            }
        }
    }
});

// دالة لتحديث الرسم البياني بناء على نسبة التطعيم
function updateChart(rate) {
    vaccinePercent.textContent = rate + "%";
    // كلما زادت نسبة التطعيم، يقل عدد الإصابات بنسبة تقريبية
    const reductionFactor = 1 - rate / 100;
    vaccineChart.data.datasets[0].data = infections.map(i => Math.round(i * reductionFactor));
    vaccineChart.update();
}

// ربط شريط النسبة بالتحديث التلقائي
vaccineRateInput.addEventListener("input", (e) => {
    updateChart(e.target.value);
});

// تهيئة الرسم عند التحميل
updateChart(vaccineRateInput.value);
