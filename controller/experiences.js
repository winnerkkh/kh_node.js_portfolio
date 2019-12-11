exports.getExperiences = (req, res) => {
  const experiencesInfo = [
    {
      company: "POSCO ICT",
      projectName: 'Updating the "Information & Sharing Portal" Website',
      period: "March 2018 - July 2018",
      projectSummary:
        "Worked on the process of updating Posco's portal site and developed customers’ (POSCO ICT Employees) requests while maintaining its website",
      framework: "Struts111111111111111111111111111111",
      languages: ["JAVA", "JavaScript", "JSP"],
      dbms: "Oracle",
      tools: ["Eclipse(IDE)", "Orange(DBMS tool)"],
      etc: ["Mybatis"]
    },
    {
      company: "SAMSUNG SDS",
      projectName:
        'Developing the internal use of the "EMS (Equipment Management System)" website',
      period: "July 2018 - October 2018",
      projectSummary:
        "Developing and building a new EMS (Equipment Management System) webpage that tracks the history of the assembled parts of the Samsung Semi-Conductor",
      framework:
        "Any Framework (Developed by Samsung which is based on Spring Framework)",
      languages: ["JAVA", "JavaScript", "HTML5"],
      dbms: "Oracle",
      tools: ["Eclipse(IDE)", "SQL Developer(DBMS tool)"],
      etc: ["Mybatis", "jQuery", "SVN"]
    },
    {
      company: "LG FASHION",
      projectName:
        'LF Internal "Groupware", "Logistics system" and "POS(Point of Sales)" System Maintenance',
      period: "November 2018 - September 2019",
      projectSummary:
        "Maintaining Groupware website, the Logistics Integration System and POS system with developing new features that were requested by customers (LG Fashion Employees)",
      framework: "Spring",
      languages: ["JAVA", "JavaScript", "JSP"],
      dbms: "Oracle",
      tools: ["Eclipse(IDE)", "SQL Developer(DBMS tool)"],
      etc: ["Mybatis", "jQuery", "SVN"]
    }
  ];

  res.send(experiencesInfo);
};
