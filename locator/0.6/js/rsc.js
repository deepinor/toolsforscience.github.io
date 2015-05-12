//
//  rsc.js
//  ver. 0.6
//  Copyright (C) 2011 L.P. All Rights Reserved. The program on this website is distributed under BSD license.
//  No warranty.
//

var rscjournals=[
"The Analyst",
"Analytical Communications",
"Analytical Proceedings",
"Analytical Proceedings including Analytical Communications",
"Annual Reports on Analytical Atomic Spectroscopy",
"Annual Reports on the Progress of Chemistry",
"Annual Reports on the Progress of Chemistry, Section A: General Physical and Inorganic Chemistry",
"Annual Reports on the Progress of Chemistry, Section A: Physical and Inorganic Chemistry",
"Annual Reports Section A (Inorganic Chemistry)",
"Annual Reports Section B (Organic Chemistry)",
"Annual Reports Section C (Physical Chemistry)",
"Chemical Biology Virtual Journal",
"Chemical Communications",
"Chemical Communications (London)",
"Chemistry Education Research and Practice",
"Chemical Science",
"Chemical Society Reviews",
"Chemical Technology",
"Chemistry World",
"Contemporary Organic Synthesis",
"CrystEngComm",
"Dalton Transactions",
"Discuss. Faraday Soc.",
"Discussions of the Faraday Society",
"Energy & Environmental Science",
"Faraday Discussions",
"Faraday Discussions of the Chemical Society",
"Faraday Special Discussions of the Chemical Society",
"Faraday Symposia of the Chemical Society",
"Geochemical Transactions",
"Green Chemistry",
"Green Chem.",
"Journal and Proceedings of the Institute of Chemistry of Great Britain and Ireland",
"Journal and Proceedings of the Royal Institute of Chemistry",
"Journal and Proceedings of the Royal Institute of Chemistry of Great Britain and Ireland",
"Journal of Analytical Atomic Spectrometry",
"Journal of Chemical Research",
"Journal of Environmental Monitoring",
"Journal of Materials Chemistry",
"J. Mater. Chem.",
"Journal of the Chemical Society",
"Journal of the Chemical Society (Resumed)",
"Journal of the Chemical Society A: Inorganic, Physical, Theoretical",
"Journal of the Chemical Society B: Physical Organic",
"Journal of the Chemical Society C: Organic",
"Journal of the Chemical Society D: Chemical Communications",
"Journal of the Chemical Society, Abstracts",
"Journal of the Chemical Society, Chemical Communications",
"Journal of the Chemical Society, Dalton Transactions",
"Journal of the Chemical Society, Faraday Transactions",
"Journal of the Chemical Society, Faraday Transactions 1",
"Journal of the Chemical Society, Faraday Transactions 2",
"Journal of the Chemical Society, Perkin Transactions 1",
"Journal of the Chemical Society, Perkin Transactions 2",
"Journal of the Chemical Society, Transactions",
"Journal of the Royal Institute of Chemistry",
"Jubilee of the Chemical Society",
"Lab on a Chip",
"Memoirs and Proceedings of the Chemical Society",
"Memoirs of the Chemical Society of London",
"Metallomics",
"Molecular BioSystems",
"Natural Product Reports",
"New Journal of Chemistry",
"Organic &  Biomolecular Chemistry",
"Pesticide Outlook",
"Photochemical & Photobiological Sciences",
"PhysChemComm",
"Physical Chemistry Chemical Physics",
"Proceedings of the Analytical Division of the Chemical Society",
"Proceedings of the Chemical Society",
"Proceedings of the Chemical Society (London)",
"Proceedings of the Chemical Society of London",
"Proceedings of the Institute of Chemistry of Great Britain and Ireland",
"Proceedings of the Society for Analytical Chemistry",
"Quarterly Journal of the Chemical Society of London",
"Quarterly Reviews, Chemical Society",
"Royal Institute of Chemistry, Reviews",
"Selected Annual Reviews of the Analytical Sciences",
"Soft Matter",
"Special Discussions of the Faraday Society",
"Symposia of the Faraday Society",
"Transactions of the Faraday Society",

//Abbreviation
"Analyst",
"Analytical Communications",
"Analytical Proc.",
"Analytical Proc. including Analytical Communications",
"Annual Reports on Analytical Atomic Spectroscopy",
"Annual Reports on Prog. Chem.",
"Annual Reports on Prog. Chem., Section A: General Physical and Inorganic Chem.",
"Annual Reports on Prog. Chem., Section A: Physical and Inorganic Chem.",
"Annual Reports Section A (Inorganic Chem.)",
"Annual Reports Section B (Organic Chem.)",
"Annual Reports Section C (Physical Chem.)",
"Chem. Biology Virtual J.",
"Chem. Comm.",
"Chem. Commun.",
"Chem. Comm. (London)",
"Chem. Commun. (London)",
"Chem. Education Research and Practice",
"Chem. Science",
"Chem. Soc. Rev.",
"Chem. Tech.",
"Chem. World",
"Contemporary Organic Synthesis",
"CrystEngComm",
"Dalton Trans.",
"Discussions Faraday Soc.",
"Energy & Environmental Science",
"Faraday Discussions",
"Faraday Discussions Chem. Soc.",
"Faraday Special Discussions Chem. Soc.",
"Faraday Symposia Chem. Soc.",
"Geochemical Trans.",
"Green Chem.",
"Green Chem.",
"J. and Proc. Institute Chem. Great Britain and Ireland",
"J. and Proc. Royal Institute Chem.",
"J. and Proc. Royal Institute Chem. Great Britain and Ireland",
"J. Analytical Atomic Spectrometry",
"J. Chem. Research",
"J. Environmental Monitoring",
"J. Materials Chem.",
"J. Mater. Chem.",
"J. Chem. Soc.",
"J. Chem. Soc. (Resumed)",
"J. Chem. Soc. A: Inorganic, Physical, Theoretical",
"J. Chem. Soc. B: Physical Organic",
"J. Chem. Soc. C: Organic",
"J. Chem. Soc. D: Chem. Communications",
"J. Chem. Soc. Abstracts",
"J. Chem. Soc. Chem. Communications",
"J. Chem. Soc. Dalton Trans.",
"J. Chem. Soc. Faraday Trans.",
"J. Chem. Soc. Faraday Trans. 1",
"J. Chem. Soc. Faraday Trans. 2",
"J. Chem. Soc. Perkin Trans. 1",
"J. Chem. Soc. Perkin Trans. 2",
"J. Chem. Soc. Trans.",
"J. Royal Institute Chem.",
"Jubilee Chem. Soc.",
"Lab on a Chip",
"Memoirs and Proc. Chem. Soc.",
"Memoirs Chem. Soc. London",
"Metallomics",
"Molecular BioSystems",
"Natural Product Reports",
"New J. Chem.",
"Org. Biomol. Chem.",
"Pesticide Outlook",
"Photochemical & Photobiological Sciences",
"PhysChemComm",
"Phys. Chem. Chem. Physics",
"Proc. Analytical Division Chem. Soc.",
"Proc. Chem. Soc.",
"Proc. Chem. Soc. (London)",
"Proc. Chem. Soc. London",
"Proc. Institute Chem. Great Britain and Ireland",
"Proc. Soc. for Analytical Chem.",
"Quarterly J. Chem. Soc. London",
"Quarterly Rev., Chem. Soc.",
"Royal Institute Chem., Rev.",
"Selected Annual Rev. Analytical Sciences",
"Soft Matter",
"Special Discussions Faraday Soc.",
"Symposia Faraday Soc.",
"Trans. Faraday Soc."
];

mydebug('rsc.js loaded');
alljournals = alljournals.concat(rscjournals);

isSupported.push(isRscJournal); 
jumpJournal.push(openRsc);

function isRscJournal(t,ambsearch){
	return searchNameAmbiguous(t,rscjournals,ambsearch);
}

function openRsc(t,v,p,ambsearch){
	// From: http://pubs.rsc.org/en/journals?key=title&value=archive
	//By using "artrefvolumeyear", you can search either by volume or year.
	location.href = "http://pubs.rsc.org/en/results?artrefjournalname=" + t + "&artrefstartpage=" + p + "&artrefvolumeyear=" + v + "&fcategory=journal";
}
/*
function isChemComm(t){
	var titles=[
	"Chemical Communications",
	"Chemical Communications (London)",
	"Chem. Comm.",
	"Chem. Commun.",
	"Chem. Comm. (London)",
	"Chem. Commun. (London)"];
	if(titles.indexOf(t)!=-1)
		return true;
	else
		return false;
}

*/