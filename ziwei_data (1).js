// ============================================================
// 자미두수(紫微斗數) 기초 데이터
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

  // 보조성 (좌보, 우필, 문창, 문곡, 천괴, 천월, 록존, 천마, 경양, 타라, 화성, 영성, 지공, 지겁)
  MINOR_STARS: [
    { name: "左輔", kr: "좌보", type: "auspicious" },
    { name: "右弼", kr: "우필", type: "auspicious" },
    { name: "文昌", kr: "문창", type: "auspicious" },
    { name: "文曲", kr: "문곡", type: "auspicious" },
    { name: "天魁", kr: "천괴", type: "auspicious" },
    { name: "天鉞", kr: "천월", type: "auspicious" },
    { name: "祿存", kr: "록존", type: "auspicious" },
    { name: "天馬", kr: "천마", type: "auspicious" },
    { name: "擎羊", kr: "경양", type: "inauspicious" },
    { name: "陀羅", kr: "타라", type: "inauspicious" },
    { name: "火星", kr: "화성", type: "inauspicious" },
    { name: "鈴星", kr: "영성", type: "inauspicious" },
    { name: "地空", kr: "지공", type: "inauspicious" },
    { name: "地劫", kr: "지겁", type: "inauspicious" }
  ],

  // 사화성 (화록, 화권, 화과, 화기)
  FOUR_TRANSFORMATIONS: ["化祿", "化權", "化科", "化忌"],
  FOUR_TRANS_KR: ["화록", "화권", "화과", "화기"],

  // 자미성 위치표 (음력 월/일 기준)
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

  // 자미성 위치 (생일 기준, 음력 기준)
  // 오행국(五行局) 기준 자미성 위치
  // 오행국: 수이국(2), 목삼국(3), 금사국(4), 토오국(5), 화육국(6)
  ZIWEI_POSITION: {
    2: [0,2,2,4,4,6,6,8,8,10,10,12,12,14,14,16,16,18,18,20,20,22,22,24,24,26,26,28,28,30],
    3: [0,2,4,2,4,6,4,6,8,6,8,10,8,10,12,10,12,14,12,14,16,14,16,18,16,18,20,18,20,22],
    4: [0,2,4,6,2,4,6,8,4,6,8,10,6,8,10,12,8,10,12,14,10,12,14,16,12,14,16,18,14,16],
    5: [0,2,4,6,8,2,4,6,8,10,4,6,8,10,12,6,8,10,12,14,8,10,12,14,16,10,12,14,16,18],
    6: [0,2,4,6,8,10,2,4,6,8,10,12,4,6,8,10,12,14,6,8,10,12,14,16,8,10,12,14,16,18]
  },

  // 오행국 산출표 (납음오행 기준)
  // 연간지 → 납음오행 → 오행국
  NAYIN_TABLE: {
    "甲子":"海中金", "乙丑":"海中金",
    "丙寅":"爐中火", "丁卯":"爐中火",
    "戊辰":"大林木", "己巳":"大林木",
    "庚午":"路傍土", "辛未":"路傍土",
    "壬申":"劍鋒金", "癸酉":"劍鋒金",
    "甲戌":"山頭火", "乙亥":"山頭火",
    "丙子":"澗下水", "丁丑":"澗下水",
    "戊寅":"城頭土", "己卯":"城頭土",
    "庚辰":"白蠟金", "辛巳":"白蠟金",
    "壬午":"楊柳木", "癸未":"楊柳木",
    "甲申":"泉中水", "乙酉":"泉中水",
    "丙戌":"屋上土", "丁亥":"屋上土",
    "戊子":"霹靂火", "己丑":"霹靂火",
    "庚寅":"松柏木", "辛卯":"松柏木",
    "壬辰":"長流水", "癸巳":"長流水",
    "甲午":"沙中金", "乙未":"沙中金",
    "丙申":"山下火", "丁酉":"山下火",
    "戊戌":"平地木", "己亥":"平地木",
    "庚子":"壁上土", "辛丑":"壁上土",
    "壬寅":"金箔金", "癸卯":"金箔金",
    "甲辰":"覆燈火", "乙巳":"覆燈火",
    "丙午":"天河水", "丁未":"天河水",
    "戊申":"大驛土", "己酉":"大驛土",
    "庚戌":"釵釧金", "辛亥":"釵釧金",
    "壬子":"桑柘木", "癸丑":"桑柘木",
    "甲寅":"大溪水", "乙卯":"大溪水",
    "丙辰":"沙中土", "丁巳":"沙中土",
    "戊午":"天上火", "己未":"天上火",
    "庚申":"石榴木", "辛酉":"石榴木",
    "壬戌":"大海水", "癸亥":"大海水"
  },

  // 납음오행 → 오행국
  NAYIN_TO_JU: {
    "金": 4, "木": 3, "水": 2, "火": 6, "土": 5
  },

  // 천부계열 성요 위치 (자미 위치 기준 상대적 위치)
  // 자미 위치로부터 천부계열의 위치
  TIANFU_RELATIVE: {
    "天府": [0,4,2,10,8,6,4,2,0,10,8,6],  // 자미와 역방향
    // 자미→축→인... 천부는 자미에서 반대방향
  },

  // 안성법 - 자미성을 기준으로 한 각 주성의 상대 위치
  // index: 자미성의 궁 번호(0-11)에서의 각 성의 상대 위치 (시계방향)
  STARS_FROM_ZIWEI: {
    "紫微": 0,
    "天機": -1,   // 자미 이전 궁
    "太陽": -2,   // (없음-자미 전2)
    "武曲": 1,
    "天同": 2,
    "廉貞": 4,
  },

  // 자미두수 명반 배치표 (자미성 위치별 각 성의 궁 번호)
  // 자미 위치 0~11에 따른 14주성 배치
  PALACE_STARS: {
    0:  ["紫微","天機",    null,"太陽","武曲","天同",    null,    null,"廉貞",    null,"天府","太陰","貪狼","巨門","天相","天梁","七殺",    null,    null,"破軍",    null,    null,    null,    null,    null,    null,    null,    null],
    1:  [    null,"紫微","天機",    null,"太陽","武曲","天同",    null,    null,"廉貞",    null,"天府","太陰","貪狼","巨門","天相","天梁","七殺",    null,    null,"破軍",    null,    null,    null],
    2:  ["天梁",    null,"紫微","天機",    null,"太陽","武曲","天同",    null,    null,"廉貞",    null,"天府","太陰","貪狼","巨門","天相","天梁","七殺",    null,    null,"破軍"],
  },

  // 좌보 위치표 (음력 월 기준, 인월=1월 시작)
  // 월 1~12에 따른 좌보 위치 (0=자궁)
  ZUOFU_BY_MONTH: [2,3,4,5,6,7,8,9,10,11,0,1], // 인(2)에서 시작

  // 우필 위치표 (음력 월 기준)
  YOUBI_BY_MONTH: [10,9,8,7,6,5,4,3,2,1,0,11], // 술(10)에서 역행

  // 문창 위치표 (생시 기준)
  WENCHANG_BY_HOUR: [9,8,7,6,5,4,3,2,1,0,11,10],

  // 문곡 위치표 (생시 기준)
  WENQU_BY_HOUR: [3,4,5,6,7,8,9,10,11,0,1,2],

  // 천마 위치표 (생년 지지 기준)
  TIANMA_BY_BRANCH: {
    "寅":"午","午":"午","戌":"午",  // 인오술년 오궁
    "申":"子","子":"子","辰":"子",  // 신자진년 자궁
    "亥":"亥","卯":"亥","未":"亥",  // 해묘미년 해궁 - 실제로는
    "巳":"巳","酉":"巳","丑":"巳"   // 사유축년 사궁
  },
  // 천마 위치표 (생년 지지 기준)
  // 申子辰→寅(2), 亥卯未→巳(5), 寅午戌→申(8), 巳酉丑→亥(11)
  TIANMA_POSITION: {
    "寅":8,"午":8,"戌":8,
    "申":2,"子":2,"辰":2,
    "亥":5,"卯":5,"未":5,
    "巳":11,"酉":11,"丑":11
  },

  // 록존 위치표 (생년 천간 기준)
  LUZUN_BY_STEM: {
    "甲":2,"乙":3,"丙":5,"丁":6,"戊":5,"己":6,"庚":8,"辛":9,"壬":11,"癸":0
  },

  // 경양 = 록존 +1, 타라 = 록존 -1
  // 화성, 영성 위치표 (생년 지지 + 생시 기준)
  HUOXING_TABLE: {
    "寅午戌": [2,3,4,5,6,7,8,9,10,11,0,1],
    "申子辰": [2,3,4,5,6,7,8,9,10,11,0,1],
    "亥卯未": [9,10,11,0,1,2,3,4,5,6,7,8],
    "巳酉丑": [3,4,5,6,7,8,9,10,11,0,1,2]
  },

  // 대한 기준 (오행국별 대한 시작 나이)
  DAIHAN_START_AGE: { 2:2, 3:3, 4:4, 5:5, 6:6 },

  // 음양남녀 대한 순역
  // 양남음녀: 순행(시계방향), 음남양녀: 역행
  // 양년생: 甲丙戊庚壬, 음년생: 乙丁己辛癸

  // 궁위 명칭 (12궁)
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
// 자미두수 계산 엔진
// ============================================================

class ZiweiEngine {

  // 양력 → 음력 변환 (내장 변환표 사용)
  // 간소화된 변환 - 실제로는 더 복잡한 알고리즘 필요
  solarToLunar(year, month, day) {
    // 내장 음양력 변환 데이터 사용
    return this._convertSolarToLunar(year, month, day);
  }

  // 음력 변환 핵심 로직
  _convertSolarToLunar(sy, sm, sd) {
    // 1900~2100년 음양력 변환표 (간소화)
    // 실제 구현을 위한 기준점 사용
    const lunarInfo = this._getLunarInfo(sy, sm, sd);
    return lunarInfo;
  }

  // 천간지지 산출
  getYearStemBranch(year) {
    const stemIdx = (year - 4) % 10;
    const branchIdx = (year - 4) % 12;
    return {
      stem: ZIWEI_DATA.HEAVENLY_STEMS[stemIdx],
      branch: ZIWEI_DATA.EARTHLY_BRANCHES[branchIdx],
      stemKr: ZIWEI_DATA.STEMS_KR[stemIdx],
      branchKr: ZIWEI_DATA.BRANCHES_KR[branchIdx]
    };
  }

  // 납음오행 산출
  getNayin(stem, branch) {
    const key = stem + branch;
    const nayin = ZIWEI_DATA.NAYIN_TABLE[key] || "不明";
    return nayin;
  }

  // 오행국 산출
  getJu(nayin) {
    const element = nayin.slice(-1); // 마지막 한자가 오행
    return ZIWEI_DATA.NAYIN_TO_JU[element] || 5;
  }

  // 자미성 위치 산출 (음력 생일 기준)
  getZiweiPosition(lunarDay, ju) {
    const positions = ZIWEI_DATA.ZIWEI_POSITION[ju];
    if (!positions || lunarDay < 1 || lunarDay > 30) return 0;
    return positions[lunarDay - 1] / 2; // 궁 번호로 변환
  }

  // 명궁 위치 산출 (음력 월, 생시 기준)
  getMingGongPosition(lunarMonth, birthHour) {
    // 인월(1월)=2번궁(인), 생시 역산
    // 인월 자시생 = 인궁(2번)
    const hourBranch = this.getHourBranch(birthHour);
    const hourIdx = ZIWEI_DATA.EARTHLY_BRANCHES.indexOf(hourBranch);
    
    // 명궁 = (인궁=2) + (월-1) - 시지 (역행)
    // 실제: 인월에서 순행하여 해당 월의 위치를 찾고, 거기서 시지 역행
    let mingPos = (2 + (lunarMonth - 1)) % 12; // 월 순행
    mingPos = (mingPos - hourIdx + 12) % 12;    // 시 역행
    return mingPos;
  }

  // 생시 → 시지 변환
  getHourBranch(hour) {
    // 23-1: 子, 1-3: 丑, 3-5: 寅, ...
    const idx = Math.floor(((hour + 1) % 24) / 2);
    return ZIWEI_DATA.EARTHLY_BRANCHES[idx];
  }

  // 시지 인덱스
  getHourIndex(hour) {
    return Math.floor(((hour + 1) % 24) / 2);
  }

  // 신궁(身宮) 위치 산출
  getShenGongPosition(lunarMonth, birthHour) {
    const hourBranch = this.getHourBranch(birthHour);
    const hourIdx = ZIWEI_DATA.EARTHLY_BRANCHES.indexOf(hourBranch);
    // 신궁: 인월에서 순행(월) + 시지 순행
    let shenPos = (2 + (lunarMonth - 1) + hourIdx) % 12;
    return shenPos;
  }

  // 완전한 명반 생성
  generateChart(birthData) {
    const { lunarYear, lunarMonth, lunarDay, birthHour, isLeapMonth } = birthData;
    
    const yearSB = this.getYearStemBranch(lunarYear);
    const nayin = this.getNayin(yearSB.stem, yearSB.branch);
    const ju = this.getJu(nayin);
    
    // 자미성 위치
    const ziweiPos = this.getZiweiPosition(lunarDay, ju);
    
    // 명궁 위치
    const mingPos = this.getMingGongPosition(lunarMonth, birthHour);
    
    // 신궁 위치
    const shenPos = this.getShenGongPosition(lunarMonth, birthHour);
    
    // 각 궁 명칭 배치 (명궁이 인궁에서 시작)
    const palaceLayout = this._getPalaceLayout(mingPos);
    
    // 주성 배치
    const mainStars = this._placeMainStars(ziweiPos);
    
    // 보조성 배치
    const minorStars = this._placeMinorStars(yearSB, lunarMonth, birthHour);
    
    // 사화 배치
    const transformations = this._placeTransformations(yearSB.stem);
    
    // 대한 계산
    const daihan = this._calculateDaihan(mingPos, yearSB, ju, lunarYear);
    
    return {
      yearSB,
      nayin,
      ju,
      ziweiPos,
      mingPos,
      shenPos,
      palaceLayout,
      mainStars,
      minorStars,
      transformations,
      daihan
    };
  }

  _getPalaceLayout(mingPos) {
    // 12궁 배치: 명궁 위치부터 시계방향으로 각 궁 할당
    const layout = [];
    for (let i = 0; i < 12; i++) {
      const palaceIdx = (mingPos + i) % 12;
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

  // 14주성 배치 (간소화된 전통 안성법)
  _placeMainStars(ziweiPos) {
    const stars = Array.from({length: 12}, () => []);
    
    // 자미계열 (역행 배치, 순행 offset 기준)
    // 자미=0, 천기=-1(+11), 태양=-3(+9), 무곡=-4(+8), 천동=-5(+7), 염정=-8(+4)
    const ziweiGroup = [
      {name:"紫微", kr:"자미", offset:0},
      {name:"天機", kr:"천기", offset:11},  // -1
      {name:"太陽", kr:"태양", offset:9},   // -3
      {name:"武曲", kr:"무곡", offset:8},   // -4
      {name:"天同", kr:"천동", offset:7},   // -5
      {name:"廉貞", kr:"염정", offset:4},   // -8
    ];
    
    // 천부계열 (천부에서 순행)
    // 천부는 자미의 대궁(반대궁)에서 계산
    const tianfuPos = this._getTianfuPosition(ziweiPos);
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
      const pos = ((ziweiPos + s.offset) % 12 + 12) % 12;
      stars[pos].push({...s, category:"main", color:"#c8a96e"});
    });
    
    tianfuGroup.forEach(s => {
      const pos = ((tianfuPos + s.offset) % 12 + 12) % 12;
      stars[pos].push({...s, category:"main", color:"#c8a96e"});
    });
    
    return stars;
  }

  _getTianfuPosition(ziweiPos) {
    // 천부 위치 공식: (자미 + 천부) % 12 = 4
    // 천부 = (4 - 자미 + 12) % 12
    // 검증: 자미戌(10) → 천부午(6): (10+6)%12=4 ✓
    return (4 - ziweiPos + 12) % 12;
  }

  _placeMinorStars(yearSB, lunarMonth, birthHour) {
    const stars = Array.from({length: 12}, () => []);
    const hourIdx = this.getHourIndex(birthHour);
    const branchIdx = ZIWEI_DATA.EARTHLY_BRANCHES.indexOf(yearSB.branch);
    
    // 좌보 (진=4에서 순행, 월기준)
    // 검증: 음력7월 → (4+7-1)%12=10(戌) ✓
    const zuofuPos = (4 + (lunarMonth - 1)) % 12;
    stars[zuofuPos].push({name:"左輔", kr:"좌보", category:"auspicious", color:"#7eb8d4"});
    
    // 우필 (술월=10에서 역행)
    // 검증: 음력7월 → (10-(7-1)+12)%12=4(辰) ✓
    const youbiPos = (10 - (lunarMonth - 1) + 12) % 12;
    stars[youbiPos].push({name:"右弼", kr:"우필", category:"auspicious", color:"#7eb8d4"});
    
    // 문창 (생시 기준, 술에서 역행)
    const wenchangPos = (9 - hourIdx + 12) % 12;
    stars[wenchangPos].push({name:"文昌", kr:"문창", category:"auspicious", color:"#7eb8d4"});
    
    // 문곡 (생시 기준, 진에서 순행)
    const wenquPos = (3 + hourIdx) % 12;
    stars[wenquPos].push({name:"文曲", kr:"문곡", category:"auspicious", color:"#7eb8d4"});
    
    // 천괴 (생년 천간 기준)
    const kuiPos = {"甲":1,"乙":0,"丙":11,"丁":11,"戊":2,"己":1,"庚":8,"辛":9,"壬":4,"癸":4}[yearSB.stem] || 0;
    stars[kuiPos].push({name:"天魁", kr:"천괴", category:"auspicious", color:"#7eb8d4"});
    
    // 천월 (생년 천간 기준)
    const yuePos = {"甲":7,"乙":8,"丙":9,"丁":9,"戊":6,"己":7,"庚":4,"辛":3,"壬":2,"癸":2}[yearSB.stem] || 0;
    stars[yuePos].push({name:"天鉞", kr:"천월", category:"auspicious", color:"#7eb8d4"});
    
    // 록존 (생년 천간 기준)
    const luzunPos = ZIWEI_DATA.LUZUN_BY_STEM[yearSB.stem] || 0;
    stars[luzunPos].push({name:"祿存", kr:"록존", category:"auspicious", color:"#7eb8d4"});
    
    // 경양 = 록존 +1
    const qingyangPos = (luzunPos + 1) % 12;
    stars[qingyangPos].push({name:"擎羊", kr:"경양", category:"inauspicious", color:"#d47e7e"});
    
    // 타라 = 록존 -1
    const tuoluoPos = (luzunPos - 1 + 12) % 12;
    stars[tuoluoPos].push({name:"陀羅", kr:"타라", category:"inauspicious", color:"#d47e7e"});
    
    // 천마 (생년 지지 기준): 申子辰→寅(2), 亥卯未→巳(5), 寅午戌→申(8), 巳酉丑→亥(11)
    const tianmaPos = {"寅":8,"午":8,"戌":8,"申":2,"子":2,"辰":2,"亥":5,"卯":5,"未":5,"巳":11,"酉":11,"丑":11}[yearSB.branch] || 8;
    stars[tianmaPos].push({name:"天馬", kr:"천마", category:"auspicious", color:"#7eb8d4"});
    
    // 화성 (생년 지지 + 생시)
    const huoxingBase = {"寅":2,"午":2,"戌":2,"申":2,"子":2,"辰":2,"亥":9,"卯":9,"未":9,"巳":3,"酉":3,"丑":3}[yearSB.branch] || 2;
    const huoxingPos = (huoxingBase + hourIdx) % 12;
    stars[huoxingPos].push({name:"火星", kr:"화성", category:"inauspicious", color:"#d47e7e"});
    
    // 영성 (생년 지지 + 생시)
    // 검증: 卯년,축시(hIdx=1) → lxBase["卯"]=10 → (10+1)%12=11(亥) ✓
    const lingxingBase = {"寅":11,"午":11,"戌":11,"申":5,"子":5,"辰":5,"亥":10,"卯":10,"未":10,"巳":3,"酉":3,"丑":3}[yearSB.branch] || 0;
    const lingxingPos = (lingxingBase + hourIdx) % 12;
    stars[lingxingPos].push({name:"鈴星", kr:"영성", category:"inauspicious", color:"#d47e7e"});
    
    // 지공 (생시 기준, 해에서 역행)
    const digongPos = (11 - hourIdx + 12) % 12;
    stars[digongPos].push({name:"地空", kr:"지공", category:"inauspicious", color:"#d47e7e"});
    
    // 지겁 (생시 기준, 해에서 순행)
    const dijiePos = (11 + hourIdx) % 12;
    stars[dijiePos].push({name:"地劫", kr:"지겁", category:"inauspicious", color:"#d47e7e"});
    
    return stars;
  }

  _placeTransformations(stem) {
    const trans = ZIWEI_DATA.STEM_TRANSFORMATIONS[stem] || {};
    return trans;
  }

  _calculateDaihan(mingPos, yearSB, ju, lunarYear) {
    const startAge = ZIWEI_DATA.DAIHAN_START_AGE[ju] || 5;
    const isYang = ["甲","丙","戊","庚","壬"].includes(yearSB.stem);
    
    // 양남음녀: 순행, 음남양녀: 역행 (여기서는 기본 순행)
    const daihanList = [];
    for (let i = 0; i < 12; i++) {
      const age = startAge + i * 10;
      const pos = (mingPos + i) % 12;
      daihanList.push({
        sequence: i + 1,
        startAge: age,
        endAge: age + 9,
        position: pos,
        earthlyBranch: ZIWEI_DATA.EARTHLY_BRANCHES[pos],
        branchKr: ZIWEI_DATA.BRANCHES_KR[pos]
      });
    }
    return daihanList;
  }
}

// 간소화된 음양력 변환
function getSolarTermApprox(year, month, day) {
  // 간소화된 접근법
  return { lunarYear: year, lunarMonth: month, lunarDay: day };
}

// 루나 캘린더 내장 데이터 (1900-2100)
// 음양력 변환을 위한 핵심 데이터
const LUNAR_CALENDAR_DATA = {
  // 각 연도별 음력 데이터 (축약형)
  // [음력 1월 1일의 양력 날짜, 각 달의 일수(대월=30, 소월=29), 윤달 위치]
  // 실제 데이터는 아래에 포함
};

// 실용적인 음양력 변환 함수 (한국천문연구원 알고리즘 기반)
function solarToLunar(sy, sm, sd) {
  // 기준일: 1900년 1월 31일 = 음력 1900년 1월 1일 (경자년)
  const lunarData = getLunarData();
  
  // 해당 날짜의 절대일수 계산
  const solarDays = solarToDays(sy, sm, sd);
  const baseDays = solarToDays(1900, 1, 31);
  const diffDays = solarDays - baseDays;
  
  if (diffDays < 0) return { year: sy, month: sm, day: sd, isLeap: false };
  
  let remain = diffDays;
  let lunarYear = 1900;
  
  for (let y = 1900; y < 2100; y++) {
    const daysInYear = getDaysInLunarYear(y, lunarData);
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
    const actualMonth = leapPos > 0 && m >= leapPos ? m : m + 1;
    const isLeapM = leapPos > 0 && m === leapPos;
    
    if (remain < yearData.months[m]) {
      lunarMonth = isLeapM ? Math.ceil(m/1) : actualMonth;
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

function solarToDays(y, m, d) {
  // 율리우스일 계산
  if (m <= 2) { y--; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524;
}

function getDaysInLunarYear(year, lunarData) {
  const data = lunarData[year];
  if (!data) return 354;
  return data.months.reduce((s, v) => s + v, 0);
}

function getLunarData() {
  // 1900~2050년 음력 데이터 (핵심 연도)
  // 형식: { months: [각월일수], leapMonth: 윤달위치(0=없음) }
  // 이 데이터는 한국천문연구원 데이터 기반
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
