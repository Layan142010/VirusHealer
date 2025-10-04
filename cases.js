const casesContainer = document.getElementById("cases-container");
const refreshBtn = document.getElementById("refreshBtn");

// قاعدة بيانات دراسات الحالة
const casesData = [
    {
        title: "حالة COVID-19 في الرياض",
        date: "2025-05-12",
        description: "تم تسجيل حالة إصابة COVID-19 في أحد المكاتب بالرياض. تم عزل المريض وتتبعت المخالطين.",
        virus: "COVID-19",
        outcome: "تعافى المريض بعد 14 يومًا من العلاج المنزلي."
    },
    {
        title: "انفلونزا شديدة في الدمام",
        date: "2025-03-22",
        description: "انتشار سريع لإنفلونزا الموسمية بين طلاب إحدى المدارس. تم تطعيم بقية الطلاب للحد من الانتشار.",
        virus: "انفلونزا",
        outcome: "انخفض عدد الإصابات بعد أسبوعين من التدخل."
    },
    {
        title: "فيروس معوي في جدة",
        date: "2025-04-15",
        description: "انتشار فيروس معوي في أحد المطاعم بسبب الطعام الملوث. تم إغلاق المطعم وتعقيم المنطقة.",
        virus: "فيروس معوي",
        outcome: "تم السيطرة على انتشار الفيروس بعد 3 أيام."
    },
    {
        title: "نزلة برد جماعية في مكة",
        date: "2025-02-10",
        description: "أصيب عدد كبير من الموظفين بنزلة برد. تم نصح الجميع بالراحة وشرب السوائل.",
        virus: "نزلة برد",
        outcome: "تعافى الجميع خلال أسبوع."
    },
    {
        title: "انفلونزا شديدة في الخبر",
        date: "2025-01-30",
        description: "تم تسجيل عدة إصابات بين الطلاب. تم تطعيم باقي الطلاب والمجتمع المحيط.",
        virus: "انفلونزا",
        outcome: "انخفضت الإصابات بشكل ملحوظ بعد 10 أيام."
    }
];

// دالة لعرض حالات عشوائية
function displayRandomCases(number = 3) {
    casesContainer.innerHTML = ""; // تفريغ المحتوى
    const casesCopy = [...casesData]; // نسخ المصفوفة لتجنب تكرار الكائنات
    casesCopy.sort(() => Math.random() - 0.5); // خلط المصفوفة
    const selectedCases = casesCopy.slice(0, number);

    selectedCases.forEach(c => {
        const div = document.createElement("div");
        div.className = "grid-item";
        div.innerHTML = `
            <h3>${c.title}</h3>
            <p><strong>الفيروس:</strong> ${c.virus}</p>
            <p><strong>التاريخ:</strong> ${c.date}</p>
            <p>${c.description}</p>
            <p><strong>النتيجة:</strong> ${c.outcome}</p>
        `;
        casesContainer.appendChild(div);
    });
}

// عرض الحالات عند تحميل الصفحة
displayRandomCases();

// ربط زر تحديث الحالات
refreshBtn.addEventListener("click", () => displayRandomCases());
