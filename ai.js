// قاعدة بيانات بسيطة للأطباء
const doctorsDB = [
    {name:'د. محمد العلي', specialty:'أمراض باطنية', city:'الرياض', phone:'0501111111'},
    {name:'د. نورة الحربي', specialty:'أمراض صدرية', city:'الدمام', phone:'0502222222'},
    {name:'د. خالد الزهراني', specialty:'أطفال', city:'جدة', phone:'0503333333'},
    {name:'د. سارة العتيبي', specialty:'أمراض جلدية', city:'الخبر', phone:'0504444444'},
  ];
  
  // بداية الحوار
  let conversation = [
    {role:'ai', text:'مرحباً! أنا المستشار الصحي AI. كيف تشعر اليوم؟'},
  ];
  
  const chatBox = document.getElementById('chatBox');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  
  // دالة لعرض الحوار في الصفحة
  function renderChat(){
    chatBox.innerHTML = '';
    conversation.forEach(msg=>{
      const div = document.createElement('div');
      div.className = 'chat-message ' + msg.role;
      div.innerHTML = msg.text;
      chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // دالة لتوليد ردود AI
  function getAIResponse(userText){
    userText = userText.toLowerCase();
  
    // التعرف على بعض الأعراض
    if(userText.includes('حرارة') || userText.includes('حمى')){
      return 'أفهم أنك تعاني من حرارة. هل لاحظت أعراض أخرى مثل سعال أو صداع؟';
    }
    if(userText.includes('سعال')){
      return 'شكراً للمعلومة. هل لديك صعوبة في التنفس أو ألم صدر؟';
    }
    if(userText.includes('صداع')){
      return 'هل هذا الصداع مستمر أم متقطع؟';
    }
  
    // طلب نصائح أو توصيات
    if(userText.includes('نصيحة') || userText.includes('مساعدة')){
      let doc = doctorsDB[Math.floor(Math.random()*doctorsDB.length)];
      return `أنصحك بزيارة طبيب متخصص قريب منك: ${doc.name} (${doc.specialty}) في ${doc.city}. رقم الهاتف: ${doc.phone}`;
    }
  
    // ردود عامة إذا لم تعرف الكلمة المفتاحية
    const genericReplies = [
      'هل يمكنك توضيح أكثر؟',
      'ممكن تخبرني المزيد عن الأعراض؟',
      'أخبرني كيف تشعر بالضبط.',
      'حسناً، دعنا نتابع لنفهم الحالة أكثر.'
    ];
    return genericReplies[Math.floor(Math.random()*genericReplies.length)];
  }
  
  // حدث إرسال الرسالة
  sendBtn.addEventListener('click', ()=>{
    const text = userInput.value.trim();
    if(!text) return;
    conversation.push({role:'user', text:text});
    const aiReply = getAIResponse(text);
    conversation.push({role:'ai', text:aiReply});
    renderChat();
    userInput.value = '';
  });
  
  // إرسال عند الضغط على Enter
  userInput.addEventListener('keypress', function(e){
    if(e.key==='Enter'){ sendBtn.click(); }
  });
  
  // عرض الحوار الابتدائي
  renderChat();
  