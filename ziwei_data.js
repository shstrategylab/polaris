// ============================================================
// 자미두수(紫微斗數) 기초 데이터 (오류 수정 완료)
// ============================================================

const ZIWEI_DATA = {

  // 12궁 이름
  PALACES: [
    "명궁(命宮)", "형제궁(兄弟宮)", "부처궁(夫妻宮)", "자녀궁(子女宮)",
    "재백궁(財帛宮)", "질액궁(疾厄宮)", "천이궁(遷移宮)", "노복궁(奴僕宮)",
    "관록궁(官祿宮)", "전택궁(田宅宮)", "복덕궁(福德宮)", "부모궁(父母宮)"
  ],

  // 12지지
  EARTHLY_BRANCHES: ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],

  // 10천간
  HEAVENLY_STEMS: ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],

  // 천간 한글
  STEMS_KR: ["갑","을","병","정","무","기","경","신","임","계"],

  // 지지 한글
  BRANCHES_KR: ["자","축","인","묘","진","사","오","미","신","유","술","해"],

  // 오행
  FIVE_ELEMENTS: ["木","火","土","金","水"],

  // 주요 성요 (14주성)
  MAJOR_STARS: [
    { name: "紫微", kr: "자미", element: "土", type: "main", yin_yang: "陰" },
    { name: "天機", kr: "천기", element: "木", type: "main", yin_yang: "陰" },
    { name: "太陽", kr: "태양", element: "火", type: "main", yin_yang: "陽" },
    { name: "武曲", kr: "무곡", element: "金", type: "main", yin_yang: "陰" },
    { name: "天同", kr: "천동", element: "水", type: "main", yin_yang: "陽" },
    { name: "廉貞", kr: "염정", element: "火", type: "main", yin_yang: "陰" },
    { name: "天府", kr: "천부", element: "土", type: "main", yin_yang: "陽" },
    { name: "太陰", kr: "태음", element: "水", type: "main", yin_yang: "陰" },
    { name: "貪狼", kr: "탐랑", element: "木", type: "main", yin_yang: "陽" },
    { name: "巨門", kr: "거문", element: "水", type: "main", yin_yang: "陰" },
    { name: "天相", kr: "천상", element: "水", type: "main", yin_yang: "陽" },
    { name: "天梁", kr: "천량", element: "土", type: "main", yin_yang: "陽" },
    { name: "七殺", kr: "칠살", element: "金", type: "main", yin_yang: "陰" },
    { name: "破軍", kr: "파군", element: "水", type: "main", yin_yang: "陰" }
  ],

  // 보조성
  MINOR_STARS: [
    { name: "Left", kr: "좌보", type: "auspicious" },
    { name: "Right", kr: "우필", type: "auspicious" },
    { name: "Chang", kr: "문창", type: "auspicious" },
    { name: "Qu", kr: "문곡", type: "auspicious" },
    { name: "Kui", kr: "천괴", type: "auspicious" },
    { name: "Yue", kr: "천월", type: "auspicious" },
    { name: "Lu", kr: "록존", type: "auspicious" },
    { name: "Ma", kr: "천마", type: "auspicious" },
    { name: "Yang", kr: "경양", type: "inauspicious" },
    { name: "Tuo", kr: "타라", type: "inauspicious" },
    { name: "Huo", kr: "화성", type: "inauspicious" },
    { name: "Ling", kr: "영성", type: "inauspicious" },
    { name: "Kong", kr: "지공", type: "inauspicious" },
    { name: "Jie", kr: "지겁", type: "inauspicious" }
  ],

  // 사화성
  FOUR_TRANSFORMATIONS: ["化祿", "化權", "化科", "化忌"],
  FOUR_TRANS_KR: ["화록", "화권", "화과", "화기"],

  // 생년 천간별 사화 배치
  STEM_TRANSFORMATIONS: {
    "甲": { "化祿":"廉貞","化權":"破軍","化科":"武曲","化忌":"太陽" },
    "乙": { "化祿":"天機","化權":"天梁","化科":"紫微","化忌":"太陰" },
    "丙": { "化祿":"天同","化權":"天機","化科":"文昌","化忌":"廉貞" },
    "丁": { "化祿":"太陰","化權":"天同","化科":"天機","化忌":"巨門" },
    "戊": { "化祿":"貪狼","化權":"太陰","化科":"右弼","化忌":"天機" },
    "己": { "化祿":"武曲","化權":"貪狼","化科":"天梁","化忌":"文曲" },
    "庚": { "化祿":"太陽","化權":"武曲","化科":"太陰","化忌":"天同" },
    "辛": { "化祿":"巨門","化權":"太陽","化科":"文曲","化忌":"文昌" },
    "壬": { "化祿":"天梁","化權":"紫微","化科":"左輔","化忌":"武曲" },
    "癸": { "化祿":"破軍","化權":"巨門","化科":"太陰","化忌":"貪狼" }
  },

  // 오행국 기준 자미성 위치 (생일 인덱스)
  ZIWEI_POSITION: {
    2: [0,2,2,4,4,6,6,8,8,10,10,12,12,14,14,16,16,18,18,20,20,22,22,24,24,26,26,28,28,30],
    3: [0,2,4,2,4,6,4,6,8,6,8,10,8,10,12,10,12,14,12,14,16,14,16,18,16,18,20,18,20,22],
    4: [0,2,4,6,2,4,6,8,4,6,8,10,6,8,10,12,8,10,12,14,10,12,14,16,12,14,16,18,14,16],
    5: [0,2,4,6,8,2,4,6,8,10,4,6,8,10,12,6,8,10,12,14,8,10,12,14,16,10,12,14,16,18],
    6: [0,2,4,6,8,10,2,4,6,8,10,12,4,6,8,10,12,14,6,8,10,12,14,16,8,10,12,14,16,18]
  },

  // 납음오행 산출표
  NAYIN_TABLE: {
    "甲子":"海中金", "乙丑":"海中金", "丙寅":"爐中火", "丁卯":"爐中火", "戊辰":"大林木", "己巳":"大林木",
    "庚午":"路傍土", "辛未":"路傍土", "壬申":"劍鋒金", "癸酉":"劍鋒金", "甲戌":"山頭火", "乙亥":"山頭火",
    "丙子":"澗下水", "丁丑":"澗下水", "戊寅":"城頭土", "己卯":"城頭土", "庚辰":"白蠟金", "辛巳":"白蠟金",
    "壬午":"楊柳木", "癸未":"楊柳木", "甲申":"泉中水", "乙酉":"泉中水", "丙戌":"屋上土", "丁亥":"屋上土",
    "戊子":"霹靂火", "己丑":"霹靂火", "庚寅":"松柏木", "辛卯":"松柏木", "壬辰":"長流水", "癸巳":"長流水",
    "甲午":"沙中金", "乙未":"沙중金", "丙申":"山下火", "丁酉":"山下火", "戊戌":"平地木", "己亥":"平地木",
    "庚子":"壁上土", "辛丑":"壁上土", "壬寅":"金箔金", "癸卯":"金箔金", "甲辰":"覆燈火", "乙巳":"覆燈火",
    "丙午":"天河水", "丁未":"天河水", "戊申":"大驛土", "己酉":"大驛土", "庚戌":"釵釧金", "辛亥":"釵釧金",
    "壬子":"桑柘木", "癸丑":"桑柘木", "甲寅":"大溪水", "乙卯":"大溪水", "丙辰":"沙中土", "丁巳":"沙中土",
    "戊午":"天上火", "己未":"天上火", "庚申":"石榴木", "辛酉":"石榴木", "壬戌":"大海水", "癸亥":"大海水"
  },

  NAYIN_TO_JU: { "金": 4, "木": 3, "水": 2, "火": 6, "土": 5 },

  // 록존 위치표 (생년 천간 기준)
  LUZUN_BY_STEM: { "甲":2, "乙":3, "丙":5, "丁":6, "戊":5, "己":6, "庚":8, "辛":9, "壬":11, "癸":0 },

  // 오행국별 대한 시작 나이
  DAIHAN_START_AGE: { 2:2, 3:3, 4:4, 5:5, 6:6 },

  // 궁위 명칭 기본 데이터
  PALACE_NAMES_FULL: [
    { pos: 0, name: "命宮", kr: "명궁", desc: "타고난 성격, 외모, 전반적 운명" },
    { pos: 1, name: "兄弟宮", kr: "형제궁", desc: "형제자매 관계, 친구" },
    { pos: 2, name: "夫妻宮", kr: "부처궁", desc: "배우자, 연애, 결혼" },
    { pos: 3, name: "子女宮", kr: "자녀궁", desc: "자녀, 부하, 학생" },
    { pos: 4, name: "財帛宮", kr: "재백궁", desc: "재물, 금전운, 경제활동" },
    { pos: 5, name: "疾厄宮", kr: "질액궁", desc: "건강, 질병, 재액" },
    { pos: 6, name: "遷移宮", kr: "천이궁", desc: "이동, 출장, 해외, 사회활동" },
    { pos: 7, name: "奴僕宮", kr: "노복궁", desc: "부하, 친구, 인간관계" },
    { pos: 8, name: "官祿宮", kr: "관록궁", desc: "직업, 사업, 명예, 사회적 지위" },
    { pos: 9, name: "田宅宮", kr: "전택궁", desc: "부동산, 가정환경, 거주" },
    { pos: 10, name: "福德宮", kr: "복덕궁", desc: "복, 정신세계, 취미, 행복" },
    { pos: 11, name: "父母宮", kr: "부모궁", desc: "부모, 윗사람, 문서" }
  ]
};

// ============================================================
// 자미두수 계산 엔진 (오류 수정 완료)
// ============================================================

class ZiweiEngine {

  solarToLunar(year, month, day) {
    return this._convertSolarToLunar(year, month, day);
  }

  _convertSolarToLunar(sy, sm, sd) {
    // 1990년 이후 한국천문연구원 기준 음양력 변환 코어 알고리즘
    const lunarData = this.getLunarData();
    
    const solarDays = this.solarToDays(sy, sm, sd);
    // 기준일 정정: 음력 1990년 1월 1일 = 양력 1990년 1월 27일
    const baseDays = this.solarToDays(1990, 1, 27);
    const diffDays = solarDays - baseDays;
    
    if (diffDays < 0) return { year: sy, month: sm, day: sd, isLeap: false };
    
    let remain = diffDays;
    let lunarYear = 1990;
    
    for (let y = 1990; y <= 2026; y++) {
      const daysInYear = this.getDaysInLunarYear(y, lunarData);
      if (remain < daysInYear) {
        lunarYear = y;
        break;
      }
      remain -= daysInYear;
      lunarYear = y + 1;
    }
    
    const yearData = lunarData[lunarYear] || { months: [29,30,29,30,29,30,29,30,29,30,29,30], leapMonth: 0 };
    let lunarMonth = 1;
    let isLeap = false;
    
    for (let m = 0; m < yearData.months.length; m++) {
      const leapPos = yearData.leapMonth;
      const actualMonth = (leapPos > 0 && m >= leapPos) ? m : m + 1;
      const isLeapM = (leapPos > 0 && m === leapPos);
      
      if (remain < yearData.months[m]) {
        lunarMonth = isLeapM ? leapPos : actualMonth;
        isLeap = isLeapM;
        break;
      }
      remain -= yearData.months[m];
    }
    
    return {
      year: lunarYear,
      month: lunarMonth,
      day: remain + 1,
      isLeap: isLeap
    };
  }

  solarToDays(y, m, d) {
    if (m <= 2) { y--; m += 12; }
    const A = Math.floor(y / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524;
  }

  getDaysInLunarYear(year, lunarData) {
    const data = lunarData[year];
    if (!data) return 354;
    return data.months.reduce((s, v) => s + v, 0);
  }

  getYearStemBranch(year) {
    const stemIdx = ((year - 4) % 10 + 10) % 10;
    const branchIdx = ((year - 4) % 12 + 12) % 12;
    return {
      stem: ZIWEI_DATA.HEAVENLY_STEMS[stemIdx],
      branch: ZIWEI_DATA.EARTHLY_BRANCHES[branchIdx],
      stemKr: ZIWEI_DATA.STEMS_KR[stemIdx],
      branchKr: ZIWEI_DATA.BRANCHES_KR[branchIdx]
    };
  }

  getNayin(stem, branch) {
    return ZIWEI_DATA.NAYIN_TABLE[stem + branch] || "不明";
  }

  getJu(nayin) {
    const element = nayin.slice(-1);
    return ZIWEI_DATA.NAYIN_TO_JU[element] || 5;
  }

  getZiweiPosition(lunarDay, ju) {
    const positions = ZIWEI_DATA.ZIWEI_POSITION[ju];
    if (!positions || lunarDay < 1 || lunarDay > 30) return 0;
    return positions[lunarDay - 1] / 2;
  }

  getMingGongPosition(lunarMonth, birthHour) {
    const hourIdx = this.getHourIndex(birthHour);
    // 명궁 = 寅궁(2) + (음력월 - 1) - 시지 인덱스 (역행)
    let mingPos = (2 + (lunarMonth - 1)) % 12;
    mingPos = (mingPos - hourIdx + 12) % 12;
    return mingPos;
  }

  getShenGongPosition(lunarMonth, birthHour) {
    const hourIdx = this.getHourIndex(birthHour);
    // 신궁 = 寅궁(2) + (음력월 - 1) + 시지 인덱스 (순행)
    return (2 + (lunarMonth - 1) + hourIdx) % 12;
  }

  getHourIndex(hour) {
    return Math.floor(((hour + 1) % 24) / 2);
  }

  // 명반 생성 함수에 성별(gender: 'M' 또는 'F') 매개변수 추가 권장
  generateChart(birthData) {
    const { lunarYear, lunarMonth, lunarDay, birthHour, gender = "M" } = birthData;
    
    const yearSB = this.getYearStemBranch(lunarYear);
    const nayin = this.getNayin(yearSB.stem, yearSB.branch);
    const ju = this.getJu(nayin);
    
    const ziweiPos = this.getZiweiPosition(lunarDay, ju);
    const mingPos = this.getMingGongPosition(lunarMonth, birthHour);
    const shenPos = this.getShenGongPosition(lunarMonth, birthHour);
    
    // 12궁 반시계방향 역행 배치 반영
    const palaceLayout = this._getPalaceLayout(mingPos);
    
    const mainStars = this._placeMainStars(ziweiPos);
    const minorStars = this._placeMinorStars(yearSB, lunarMonth, birthHour);
    const transformations = this._placeTransformations(yearSB.stem);
    
    // 대한 순역 계산 반영
    const daihan = this._calculateDaihan(mingPos, yearSB, ju, gender);
    
    return {
      yearSB, nayin, ju, ziweiPos, mingPos, shenPos,
      palaceLayout, mainStars, minorStars, transformations, daihan
    };
  }

  _getPalaceLayout(mingPos) {
    const layout = [];
    for (let i = 0; i < 12; i++) {
      // 자미두수 12궁은 명궁(0)부터 시계 반대방향(역행)으로 돌아갑니다.
      const palaceIdx = (mingPos - i + 12) % 12;
      layout[palaceIdx] = {
        position: palaceIdx,
        name: ZIWEI_DATA.PALACE_NAMES_FULL[i].name,
        nameKr: ZIWEI_DATA.PALACE_NAMES_FULL[i].kr,
        earthlyBranch: ZIWEI_DATA.EARTHLY_BRANCHES[palaceIdx],
        branchKr: ZIWEI_DATA.BRANCHES_KR[palaceIdx],
        desc: ZIWEI_DATA.PALACE_NAMES_FULL[i].desc
      };
    }
    return layout;
  }

  _placeMainStars(ziweiPos) {
    const stars = Array.from({length: 12}, () => []);
    
    const ziweiGroup = [
      {name:"紫微", kr:"자미", offset:0},
      {name:"天機", kr:"천기", offset:11},
      {name:"太陽", kr:"태양", offset:9},
      {name:"武曲", kr:"무곡", offset:8},
      {name:"天同", kr:"천동", offset:7},
      {name:"廉貞", kr:"염정", offset:4},
    ];
    
    const tianfuPos = (4 - ziweiPos + 12) % 12;
    const tianfuGroup = [
      {name:"天府", kr:"천부", offset:0},
      {name:"太陰", kr:"태음", offset:1},
      {name:"貪狼", kr:"탐랑", offset:2},
      {name:"巨門", kr:"거문", offset:3},
      {name:"天相", kr:"천상", offset:4},
      {name:"天梁", kr:"천량", offset:5},
      {name:"七殺", kr:"칠살", offset:6},
      {name:"破軍", kr:"파군", offset:10},
    ];
    
    ziweiGroup.forEach(s => {
      const pos = (ziweiPos + s.offset) % 12;
      stars[pos].push({...s, category:"main", color:"#c8a96e"});
    });
    
    tianfuGroup.forEach(s => {
      const pos = (tianfuPos + s.offset) % 12;
      stars[pos].push({...s, category:"main", color:"#c8a96e"});
    });
    
    return stars;
  }

  _placeMinorStars(yearSB, lunarMonth, birthHour) {
    const stars = Array.from({length: 12}, () => []);
    const hourIdx = this.getHourIndex(birthHour);
    
    // 좌보 (辰=4에서 순행)
    const zuofuPos = (4 + (lunarMonth - 1)) % 12;
    stars[zuofuPos].push({name:"左輔", kr:"좌보", category:"auspicious", color:"#7eb8d4"});
    
    // 우필 (戌=10에서 역행)
    const youbiPos = (10 - (lunarMonth - 1) + 12) % 12;
    stars[youbiPos].push({name:"右弼", kr:"우필", category:"auspicious", color:"#7eb8d4"});
    
    // 문창 (戌=10에서 역행으로 정정)
    const wenchangPos = (10 - hourIdx + 12) % 12;
    stars[wenchangPos].push({name:"文昌", kr:"문창", category:"auspicious", color:"#7eb8d4"});
    
    // 문곡 (辰=4에서 순행으로 정정)
    const wenquPos = (4 + hourIdx) % 12;
    stars[wenquPos].push({name:"文曲", kr:"문곡", category:"auspicious", color:"#7eb8d4"});
    
    // 정통 가태사 안성법 기준 괴월 매핑 정정 (갑무경우양, 을기서원신, 병정정해주, 육신봉마호, 임계토사창)
    const kuiPos = {"甲":1,"乙":0,"丙":11,"丁":11,"戊":1,"己":0,"庚":1,"辛":6,"壬":3,"癸":3}[yearSB.stem] || 0;
    stars[kuiPos].push({name:"天魁", kr:"천괴", category:"auspicious", color:"#7eb8d4"});
    
    const yuePos = {"甲":7,"乙":8,"丙":9,"丁":9,"戊":7,"己":8,"庚":7,"辛":2,"壬":5,"癸":5}[yearSB.stem] || 0;
    stars[yuePos].push({name:"天鉞", kr:"천월", category:"auspicious", color:"#7eb8d4"});
    
    // 록존
    const luzunPos = ZIWEI_DATA.LUZUN_BY_STEM[yearSB.stem] || 0;
    stars[luzunPos].push({name:"祿存", kr:"록존", category:"auspicious", color:"#7eb8d4"});
    
    // 경양 / 타라
    stars[(luzunPos + 1) % 12].push({name:"擎羊", kr:"경양", category:"inauspicious", color:"#d47e7e"});
    stars[(luzunPos - 1 + 12) % 12].push({name:"陀羅", kr:"타라", category:"inauspicious", color:"#d47e7e"});
    
    // 천마
    const tianmaPos = {"寅":8,"午":8,"戌":8, "申":2,"子":2,"辰":2, "亥":5,"卯":5,"未":5, "巳":11,"酉":11,"丑":11}[yearSB.branch] || 8;
    stars[tianmaPos].push({name:"天馬", kr:"천마", category:"auspicious", color:"#7eb8d4"});
    
    // 화성/영성 기점 정정 (심전전수 정통 안성법 기준)
    const huoxingBase = {"寅":1,"午":1,"戌":1, "申":2,"子":2,"辰":2, "巳":3,"酉":3,"丑":3, "亥":9,"卯":9,"未":9}[yearSB.branch] || 1;
    stars[(huoxingBase + hourIdx) % 12].push({name:"火星", kr:"화성", category:"inauspicious", color:"#d47e7e"});
    
    const lingxingBase = {"寅":3,"午":3,"戌":3, "申":10,"子":10,"辰":10, "巳":10,"酉":10,"丑":10, "亥":10,"卯":10,"未":10}[yearSB.branch] || 3;
    stars[(lingxingBase + hourIdx) % 12].push({name:"鈴星", kr:"영성", category:"inauspicious", color:"#d47e7e"});
    
    // 지공 / 지겁 (亥=11 기점)
    stars[(11 - hourIdx + 12) % 12].push({name:"地空", kr:"지공", category:"inauspicious", color:"#d47e7e"});
    stars[(11 + hourIdx) % 12].push({name:"地劫", kr:"지겁", category:"inauspicious", color:"#d47e7e"});
    
    return stars;
  }

  _placeTransformations(stem) {
    return ZIWEI_DATA.STEM_TRANSFORMATIONS[stem] || {};
  }

  _calculateDaihan(mingPos, yearSB, ju, gender) {
    const startAge = ZIWEI_DATA.DAIHAN_START_AGE[ju] || 5;
    const isYang = ["甲","丙","戊","庚","壬"].includes(yearSB.stem);
    
    // 양남음녀: 순행(시계방향), 음남양녀: 역행(반시계방향) 규칙 반영
    const isClockwise = (isYang && gender === "M") || (!isYang && gender === "F");
    
    const daihanList = [];
    for (let i = 0; i < 12; i++) {
      const age = startAge + i * 10;
      const pos = isClockwise ? (mingPos + i) % 12 : (mingPos - i + 12) % 12;
      daihanList.push({
        sequence: i + 1,
        startAge: age,
        endAge: age + 9,
        position: pos,
        earthlyBranch: ZIWEI_DATA.EARTHLY_BRANCHES[pos],
        branchKr: ZIWEI_DATA.BRANCHES_KR[pos],
        direction: isClockwise ? "순행" : "역행"
      });
    }
    return daihanList;
  }

  getLunarData() {
    return {
      1990:{months:[30,29,30,29,30,29,30,29,30,30,29,30],leapMonth:0},
      1991:{months:[29,30,29,30,29,30,29,30,29,30,30,29,30],leapMonth:8},
      1992:{months:[30,29,30,29,30,29,30,29,30,29,30,29],leapMonth:0},
      1993:{months:[30,30,29,30,29,30,29,30,29,30,29,30],leapMonth:0},
      1994:{months:[29,30,30,29,30,29,30,29,30,29,30,29,30],leapMonth:3},
      1995:{months:[30,29,30,30,29,30,29,30,29,30,29,30],leapMonth:0},
      1996:{months:[29,30,29,30,30,29,30,29,30,29,30,29],leapMonth:0},
      1997:{months:[30,29,30,29,30,30,29,30,29,30,29,30,29],leapMonth:5},
      1998:{months:[30,29,30,29,30,29,30,30,29,30,29,30],leapMonth:0},
      1999:{months:[29,30,29,30,29,30,29,30,30,29,30,29,30],leapMonth:7},
      2000:{months:[30,29,30,29,30,29,30,29,30,30,29,30],leapMonth:0},
      2001:{months:[29,30,29,30,29,30,29,30,29,30,30,29],leapMonth:0},
      2002:{months:[30,29,30,29,30,29,30,29,30,29,30,30,29],leapMonth:5},
      2003:{months:[30,29,30,29,30,29,30,29,30,29,30,29],leapMonth:0},
      2004:{months:[30,30,29,30,29,30,29,30,29,30,29,30,29],leapMonth:2},
      2005:{months:[30,29,30,30,29,30,29,30,29,30,29,30],leapMonth:0},
      2006:{months:[29,30,29,30,30,29,30,29,30,29,30,29],leapMonth:0},
      2007:{months:[30,29,30,29,30,30,29,30,29,30,29,30,29],leapMonth:7},
      2008:{months:[30,29,30,29,30,29,30,30,29,30,29,30],leapMonth:0},
      2009:{months:[29,30,29,30,29,30,29,30,30,29,30,29,30],leapMonth:5},
      2010:{months:[30,29,30,29,30,29,30,29,30,30,29,30],leapMonth:0},
      2011:{months:[29,30,29,30,29,30,29,30,29,30,30,29,30],leapMonth:7},
      2012:{months:[29,30,29,30,29,30,29,30,29,30,29,30],leapMonth:0},
      2013:{months:[30,29,30,29,30,29,30,29,30,29,30,30,29],leapMonth:4},
      2014:{months:[30,29,30,29,30,29,30,29,30,29,30,29],leapMonth:0},
      2015:{months:[30,30,29,30,29,30,29,30,29,30,29,30,29],leapMonth:6},
      2016:{months:[30,30,29,30,29,30,29,30,29,30,29,30],leapMonth:0},
      2017:{months:[29,30,30,29,30,29,30,29,30,29,30,29],leapMonth:0},
      2018:{months:[30,29,30,30,29,30,29,30,29,30,29,30,29],leapMonth:6},
      2019:{months:[30,29,30,30,29,30,29,30,29,30,29,30],leapMonth:0},
      2020:{months:[29,30,29,30,30,29,30,29,30,29,30,29,30],leapMonth:4},
      2021:{months:[29,30,29,30,30,29,30,29,30,29,30,29],leapMonth:0},
      2022:{months:[30,29,30,29,30,30,29,30,29,30,29,30],leapMonth:0},
      2023:{months:[29,30,29,30,29,30,30,29,30,29,30,29,30],leapMonth:2},
      2024:{months:[30,29,30,29,30,29,30,30,29,30,29,30],leapMonth:0},
      2025:{months:[29,30,29,30,29,30,29,30,30,29,30,29,30],leapMonth:6},
      2026:{months:[29,30,29,30,29,30,29,30,29,30,30,29],leapMonth:0},
    };
  }
}
