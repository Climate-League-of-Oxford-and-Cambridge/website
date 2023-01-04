import { Chart } from 'chart.js/auto';

type University = "Oxford" | "Cambridge"
type DisplayMode = "Oxford" | "Cambridge" | "Both"
type ImageFileType = "svg" | "png"
var mode: DisplayMode = "Both"

interface College {
  name: string;
  university: University;
  score: number;
  id: string;
  logoType: ImageFileType;
}

type Grade = "A*" | "A" | "B" | "C" | "D" | "E" | "U"

function calculateGrade(score: number): Grade {
  if (score >= 90) return "A*"
  else if (score >= 80) return "A"
  else if (score >= 70) return "B"
  else if (score >= 60) return "C"
  else if (score >= 50) return "D"
  else if (score >= 40) return "E"
  else return "U"
}

interface GradedCollege {
  name: string;
  university: University;
  score: number;
  id: string;
  logo: string;
  grade: Grade;
}

interface RankedCollege extends GradedCollege {
  rank: number;
}

// array of college data objects
const colleges: Array<College> = [
    { name: "Somerville", university: "Oxford", score: 51, id: "ox-somerville", logoType: "svg"},
    { name: "Corpus Christi", university: "Oxford", score: 47, id: "ox-corpus-christi", logoType: "svg" },
    { name: "Mansfield", university: "Oxford", score: 46, id: "ox-mansfield", logoType: "svg" },
    { name: "Wolfson", university: "Oxford", score: 41, id: "ox-wolfson", logoType: "svg" },
    { name: "Green Templeton", university: "Oxford", score: 39, id: "ox-green-templeton", logoType: "svg" },
    { name: "Kellogg", university: "Oxford", score: 38, id: "ox-kellogg", logoType: "svg" },
    { name: "Trinity", university: "Oxford", score: 32, id: "ox-trinity", logoType: "svg" },
    { name: "St. Anne's", university: "Oxford", score: 31, id: "ox-st-annes", logoType: "svg" },
    { name: "Wadham", university: "Oxford", score: 30, id: "ox-wadham", logoType: "svg" },
    { name: "Hertford", university: "Oxford", score: 28, id: "ox-hertford", logoType: "svg" },
    { name: "Worcester", university: "Oxford", score: 26, id: "ox-worcester", logoType: "svg" },
    { name: "Balliol", university: "Oxford", score: 23, id: "ox-balliol", logoType: "svg" },
    { name: "Linacre", university: "Oxford", score: 23, id: "ox-linacre", logoType: "svg" },
    { name: "Magdalen", university: "Oxford", score: 23, id: "ox-magdalen", logoType: "svg" },
    { name: "Exeter", university: "Oxford", score: 23, id: "ox-exeter", logoType: "svg" },
    { name: "Harris Manchester", university: "Oxford", score: 20, id: "ox-harris-manchester", logoType: "svg" },
    { name: "St. Cross", university: "Oxford", score: 20, id: "ox-st-cross", logoType: "svg" },
    { name: "Keble", university: "Oxford", score: 18, id: "ox-keble", logoType: "svg" },
    { name: "St. Edmund Hall", university: "Oxford", score: 18, id: "ox-st-edmund-hall", logoType: "svg" },
    { name: "Oriel", university: "Oxford", score: 17, id: "ox-oriel", logoType: "svg" },
    { name: "New", university: "Oxford", score: 15, id: "ox-new", logoType: "svg" },
    { name: "St. Hilda's", university: "Oxford", score: 15, id: "ox-st-hildas", logoType: "svg" },
    { name: "St. Hugh's", university: "Oxford", score: 15, id: "ox-st-hughs", logoType: "svg" },
    { name: "St. Peter's", university: "Oxford", score: 14, id: "ox-st-peters", logoType: "svg" },
    { name: "Jesus", university: "Oxford", score: 11, id: "ox-jesus", logoType: "svg" },
    { name: "Christ Church", university: "Oxford", score: 8, id: "ox-christ-church", logoType: "svg" },
    { name: "Lady Margaret Hall", university: "Oxford", score: 7, id: "ox-lady-margaret-hall", logoType: "svg" },
    { name: "Pembroke", university: "Oxford", score: 7, id: "ox-pembroke", logoType: "svg" },
    { name: "St. John's", university: "Oxford", score: 7, id: "ox-st-johns", logoType: "svg" },
    { name: "Lincoln", university: "Oxford", score: 6, id: "ox-lincoln", logoType: "svg" },
    { name: "Nuffield", university: "Oxford", score: 6, id: "ox-nuffield", logoType: "svg" },
    { name: "Merton", university: "Oxford", score: 5, id: "ox-merton", logoType: "svg" },
    { name: "Queen's", university: "Oxford", score: 5, id: "ox-queens", logoType: "svg" },
    { name: "Brasenose", university: "Oxford", score: 0, id: "ox-brasenose", logoType: "svg" },
    { name: "St. Antony's", university: "Oxford", score: 0, id: "ox-st-antonys", logoType: "svg" },
    { name: "St. Catherine's", university: "Oxford", score: 0, id: "ox-st-catherines", logoType: "svg" },
    { name: "University", university: "Oxford", score: 0, id: "ox-university", logoType: "svg" },
    { name: "Jesus", university: "Cambridge", score: 67, id: "cam-jesus", logoType: "svg" },
    { name: "St. John's", university: "Cambridge", score: 52, id: "cam-st-johns", logoType: "png" },
    { name: "Queens", university: "Cambridge", score: 46, id: "cam-queens", logoType: "svg" },
    { name: "Wolfson", university: "Cambridge", score: 43, id: "cam-wolfson", logoType: "png" },
    { name: "Clare Hall", university: "Cambridge", score: 42, id: "cam-clare-hall", logoType: "png" },
    { name: "Fitzwilliam", university: "Cambridge", score: 40, id: "cam-fitzwilliam", logoType: "svg" },
    { name: "St. Catharines", university: "Cambridge", score: 40, id: "cam-st-catharines", logoType: "svg" },
    { name: "Newnham", university: "Cambridge", score: 36, id: "cam-newnham", logoType: "png" },
    { name: "Hughes Hall", university: "Cambridge", score: 31, id: "cam-hughes-hall", logoType: "png" },
    { name: "Pembroke", university: "Cambridge", score: 31, id: "cam-pembroke", logoType: "svg" },
    { name: "Robinson", university: "Cambridge", score: 29, id: "cam-robinson", logoType: "svg" },
    { name: "King's", university: "Cambridge", score: 27, id: "cam-kings", logoType: "svg" },
    { name: "Corpus Christi", university: "Cambridge", score: 25, id: "cam-corpus-christi", logoType: "svg" },
    { name: "Homerton", university: "Cambridge", score: 25, id: "cam-homerton", logoType: "png" }, 
    { name: "Selwyn", university: "Cambridge", score: 25, id: "cam-selwyn", logoType: "svg" },
    { name: "St. Edmund's", university: "Cambridge", score: 22, id: "cam-st-edmunds", logoType: "png" },
    { name: "Christ's", university: "Cambridge", score: 20, id: "cam-christs", logoType: "png" },
    { name: "Clare", university: "Cambridge", score: 20, id: "cam-clare", logoType: "svg" },
    { name: "Trinity", university: "Cambridge", score: 20, id: "cam-trinity", logoType: "svg" },
    { name: "Downing", university: "Cambridge", score: 19, id: "cam-downing", logoType: "svg" },
    { name: "Churchill", university: "Cambridge", score: 18, id: "cam-churchill", logoType: "png" },
    { name: "Girton", university: "Cambridge", score: 16, id: "cam-girton", logoType: "svg" },
    { name: "Magdalene", university: "Cambridge", score: 16, id: "cam-magdalene", logoType: "svg" },
    { name: "Darwin", university: "Cambridge", score: 15, id: "cam-darwin", logoType: "svg" },
    { name: "Emmanuel", university: "Cambridge", score: 15, id: "cam-emmanuel", logoType: "svg" },
    { name: "Gonville & Caius", university: "Cambridge", score: 13, id: "cam-gonville-and-caius", logoType: "svg" },
    { name: "Sidney Sussex", university: "Cambridge", score: 7, id: "cam-sidney-sussex", logoType: "svg" },
    { name: "Lucy Cavendish", university: "Cambridge", score: 5, id: "cam-lucy-cavendish", logoType: "png" },
    { name: "Peterhouse", university: "Cambridge", score: 5, id: "cam-peterhouse", logoType: "svg" },
    { name: "Trinity Hall", university: "Cambridge", score: 5, id: "cam-trinity-hall", logoType: "png" },
    { name: "Murray Edwards", university: "Cambridge", score: 2, id: "cam-murray-edwards", logoType: "svg" },
  ];

// In order of score 
const gradedColleges: Array<GradedCollege> = [];
colleges.sort((a, b) => b.score - a.score)
  .forEach(college => gradedColleges.push({
    name: college.name,
    university: college.university, 
    score: college.score, 
    id: college.id,
    logo: college.id + "." + college.logoType,
    grade: calculateGrade(college.score),
  }))

// table of only relevant colleges with ranking
var rankedColleges: Array<RankedCollege> = [];

function reRank(): void {
  rankedColleges = []
  gradedColleges.filter(college => (mode == "Both" || mode == college.university))
  .forEach((college, rank) => rankedColleges.push({
    name: college.name,
    university: college.university, 
    score: college.score, 
    id: college.id,
    logo: college.logo,
    grade: college.grade,
    rank: rank + 1,
  }))
}

// check if screen is small
function smallScreen(): boolean {
  return window.matchMedia('screen and (max-width: 768px)').matches
}

// university logo or name depending on screen size 
function responsiveUniversity(uni: University): string {
  if (smallScreen()) {
    const logo = document.createElement("img")
    logo.classList.add('logo')
    if (uni == "Oxford") {
      logo.src = 'logos/oxford.svg';
    } else {
      logo.src = 'logos/cambridge.svg';
    }
    return logo.outerHTML
  } else return uni 
}

// college name depending on screen size 
function responsiveCollege(name: string, logo: string): string {
  if (smallScreen() && mode == "Both") return name
  else {
    const icon = document.createElement("img")
    icon.classList.add('logo')
    icon.src = `logos/${logo}`
    return `${icon.outerHTML} ${name}`
  }
}

// table headers
var headers = ['Rank','University','College','Score','Grade','Breakdown']

// update table headers 
function resetHeaders() {
  if (mode == "Both") {
    headers = [smallScreen() ? '#' : 'Rank',
               smallScreen() ? 'Uni' : 'University',
               'College','Score','Grade',
               smallScreen() ? 'Marks' : 'Mark Breakdown']
  } else {
    headers = [smallScreen() ? '#' : 'Rank',
               'College','Score','Grade',
               smallScreen() ? 'Marks' : 'Mark Breakdown']
  }
}

// function to create a table row element for a college
function createTableRow(college: RankedCollege) {
    const row = document.createElement("tr");
    const logo = document.createElement("img");
    const university = responsiveUniversity(college.university);
    const collegeName = responsiveCollege(college.name, college.logo);
    const marksPage = "marks/" + college.id + ".html"
    logo.classList.add("logo");
    logo.src = `logos/${college.logo}`;
    row.innerHTML = `
      <td>${college.rank}</td>
      ${mode == "Both" ? `<td>${university}</td>` : ''}
      <td>${collegeName}</td>
      <td>${college.score}</td>
      <td>${college.grade}</td>
      <td><a href="${marksPage}">marks</a></td>
    `;
    return row;
}

// Get a reference to the buttons
const oxfordButton = document.getElementById('oxford-button') as HTMLButtonElement;
const cambridgeButton = document.getElementById('cambridge-button') as HTMLButtonElement;
const bothButton = document.getElementById('both-button') as HTMLButtonElement;

// Set the default active button
bothButton.classList.add('active');

// Add click event listeners to the buttons
oxfordButton.addEventListener('click', () => {
  mode = "Oxford"
  oxfordButton.classList.add('active');
  cambridgeButton.classList.remove('active');
  bothButton.classList.remove('active');
  redrawTable()
});

cambridgeButton.addEventListener('click', () => {
  mode = "Cambridge"
  oxfordButton.classList.remove('active');
  cambridgeButton.classList.add('active');
  bothButton.classList.remove('active');
  redrawTable()
});

bothButton.addEventListener('click', () => {
  mode = "Both"
  oxfordButton.classList.remove('active');
  cambridgeButton.classList.remove('active');
  bothButton.classList.add('active');
  redrawTable()
});

// get the table head and body element
const tableBody = document.getElementById("rankingTableBody") as HTMLTableSectionElement;
const tableHead = document.getElementById("rankingTableHead") as HTMLTableSectionElement;

function redrawTable(): void {
  reRank(); resetHeaders();
  tableBody.innerHTML = "";
  // genereate table headers 
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const col = document.createElement('th');
    col.innerHTML = header;
    col.classList.add('text-center');
    headerRow.appendChild(col);
  })
  tableHead.innerHTML = '';
  tableHead.appendChild(headerRow);

  // generate table rows for each college and add them to the table body
  rankedColleges.forEach(college => {
    const row = createTableRow(college);
    tableBody.appendChild(row);
  });
}

window.addEventListener('resize', function(event){
  redrawTable()
});

redrawTable();