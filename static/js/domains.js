var areas = ["Africa", "Asia", "Europe", "Latin America", "Northern America", "Oceania"];

var years = ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', 
                '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', 
                '2008', '2009', '2010', '2011', '2012', '2013'];

var development = ["Developing regions","Developed regions","All"]; 

var globalareas = ["Global Areas", "Top five countries - Africa", "Top five countries - Asia", "Top five countries - Europe", "Top five countries - Latin America", "Top five countries - Oceania", "Top ten countries in the World"];

var areasCoordinates = [ 
    {
        areaname: "Oceania",
        lon: 140,
        lat: -10
    },
    {
        areaname: "Africa",
        lon: 20,
        lat: 15
    },
    {
        areaname: "Asia",
        lon: 100,
        lat: 30
    },
    {
        areaname: "Northern America",
        lon: -100,
        lat: 45
    },
    {
        areaname: "Latin America",
        lon: -70,
        lat: -5
    },
    {
        areaname: "Europe",
        lon: 15.2551,
        lat: 54.5260
    }    
];

// Summary per year for all Global Area plus the Total
// ===================================================
var africa = [3936 ,4347 ,3802 ,2654 ,2611 ,2639 ,3744 ,7428 ,7506 ,9846 ,10896 ,14005 ,18803 ,16127 ,12763 ,14277 ,14904 ,13808 ,13023 ,15059 ,19114 ,23044 ,21607 ,22133 ,26727 ,26002 ,27565 ,26818 ,28493 ,32953 ,39653 ,34217 ,36369 ,36493 ];

var asia = [31025 ,34314 ,30214 ,24696 ,27274 ,23850 ,28739 ,43203 ,47454 ,60256 ,72829 ,89964 ,90752 ,98737 ,88852 ,90424 ,103030 ,106359 ,90672 ,106444 ,134073 ,147689 ,137195 ,131302 ,134293 ,158503 ,148310 ,132769 ,138985 ,140756 ,163201 ,146290 ,151457 ,154272 ];

var europe = [39760 ,44802 ,42720 ,24638 ,22287 ,20844 ,24370 ,46698 ,54726 ,60893 ,68301 ,57938 ,64123 ,62872 ,62306 ,55571 ,55504 ,48770 ,36613 ,35459 ,37978 ,42488 ,36445 ,33918 ,37639 ,35670 ,32797 ,33284 ,34501 ,34880 ,33237 ,26648 ,29051 ,28579];

var latinAmerica = [13081 ,15215 ,16769 ,15427 ,13678 ,15171 ,21179 ,28471 ,21924 ,25060 ,27942 ,36827 ,37853 ,33840 ,21341 ,20262 ,18645 ,17174 ,13830 ,15088 ,16898 ,20067 ,19317 ,20263 ,22181 ,24747 ,24676 ,26011 ,26547 ,26867 ,28818 ,27856 ,27173 ,24950];

var northernAmerica = [9378 ,10030 ,9074 ,7100 ,6661 ,6543 ,7074 ,7705 ,6469 ,6790 ,5892 ,6054 ,6842 ,7435 ,5901 ,4890 ,5515 ,4753 ,4437 ,5196 ,5433 ,5604 ,4948 ,5543 ,6990 ,8394 ,9613 ,9463 ,10190 ,8995 ,8142 ,7676 ,7891 ,8501];

var oceania = [1942 ,1839 ,1675 ,1018 ,878 ,920 ,904 ,1200 ,1181 ,1539 ,2075 ,2495 ,2871 ,2566 ,1967 ,1565 ,1552 ,1263 ,1021 ,1055 ,1276 ,1818 ,1685 ,1800 ,1788 ,1585 ,1473 ,1693 ,1834 ,1860 ,1834 ,1548 ,1679 ,1775];

var total = [99122,110547,104254,75533,73389,69967,86010,134705,139260,164384,187935,207283,221244,221577,193130,186989,199150,192127,159596,178301,214772,240710,221197,214959,229618,254901,244434,230038,240550,246311,274885,244235,253620,254570];
