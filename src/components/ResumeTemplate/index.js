import React from 'react';
import "./index.css"; // Import the CSS file for styling



const data = {
    education: [{
        colage: "weqrq",
        course: "qwer",
        gradyear: "23"
    },
        {
            colage: "shjdgfkhajsdgfkajhsdfgk",
            course: "qwer",
            gradyear: "23"
        },
        {
            colage: "weqrq",
            course: "qwer",
            gradyear: "23"
        }],
    profile: {
        address: "RA, v. Ohanavan, 6str, H6",
        lastname: "KARAPETYAN",
        name: "Khach",
        phone: "077341019"
    },
    projects: [{
        descr: "wqergqwtqwjkhgfkqwhjegrkhjqwgrkjhqwegrkhjqwgerkhjqwgerkjhqwgerkhjqwegrkjhqwgerkhjqwegrkhjqwegrkhjqwgrkjqwegrk",
        link: "qwerqwr",
        proj: "awretwg3t"
    }],
    skills: ["wert ", "qwqw5", "q345q435", "qw45q4w5"],
    social: {
        fb: "wertygwetrfq",
        linkedin: "qqwert",
        other: "ewrq"
    }
}




const ResumeTemplate = () => {
    const { profile, education, skills, projects, social } = data;

    return (
        <div className="resume-container">
            {/* Profile Section */}
            <div className="profile-section">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="d"/>
                </div>
                <div><h2>{profile.name} {profile.lastname}</h2>
                    <p><b>Address:</b>  "{profile.address}"</p>
                    <p><b>Phone:</b>  {profile.phone}</p>
                </div>

            </div>

            {/* Education Section */}
            <div className="education-section">
                <h3>Education</h3>
       <div className="edublocks">
           {education.map((edu, index) => (
               <div key={index} className="education-item">
                   <p><strong>Course:</strong> {edu.course}</p>
                   <p><strong>College:</strong> {edu.colage}</p>
                   <p><strong>Graduation Year:</strong> {edu.gradyear}</p>
               </div>
           ))}
       </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            {/* Projects Section */}
            <div className="projects-section">
                <h3>Projects</h3>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <span>{project.proj}</span>
                        <p><strong>Description:</strong> {project.descr}</p>
                        <p><strong>Project Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                    </div>
                ))}
            </div>

            {/* Social Section */}
            <div className="social-section">
                <h3>Social</h3>
                <div className="social-items">
                    <p>
                        <strong>
                            <a href={social.fb} target="_blank"
                               rel="noopener noreferrer">Facebook</a>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href={social.linkedin} target="_blank"
                               rel="noopener noreferrer">Linkedin</a>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <a href={social.other} target="_blank"
                               rel="noopener noreferrer">Other</a>
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplate;
