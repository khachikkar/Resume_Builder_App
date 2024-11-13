import React, {useContext, useRef} from 'react';
import './index.css'; // Import the CSS file for styling
import { jsPDF } from 'jspdf';
import {Button} from "antd";
import {ResumeContext} from "../../context";


const ResumeTemplate = ({data}) => {
    const { profile, education, skills, projects, social } = data;
    const {userProfileInfo:{email, name, lastname} } = useContext(ResumeContext);



    const resumeRef = useRef();

    const downloadPDF = () => {
        const pdf = new jsPDF();
        pdf.html(resumeRef.current, {
            callback: function (pdf) {
                pdf.save(`${name}_${lastname}.pdf`);
            },
            x: 10,
            y: 10,
            html2canvas: { scale: 0.23 }, // Adjust scale if needed
            width: 190, // Width of the PDF content
        });
    };

    return (
        <div>
            <Button onClick={downloadPDF}>Download PDF</Button>
            <div className="resume-container" ref={resumeRef}>
                {/* Profile Section */}
                <div className="profile-section">
                    <div className="iig">
                        <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="Profile" />
                    </div>
                    <div>
                        <h2>{profile.name || name} {profile.lastname || lastname}</h2>
                        <p><b>Email:</b> {email}</p>
                        <p><b>Address:</b> "{profile?.address}"</p>
                        <p><b>Phone:</b> {profile?.phone}</p>
                    </div>
                </div>

                {/* Education Section */}
                <div className="education-section">
                    <h3>Education</h3>
                    <div className="edublocks">
                        {education?.map((edu, index) => (
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
                        {skills?.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/* Projects Section */}
                <div className="projects-section">
                    <h3>Projects</h3>
                    {projects?.map((project, index) => (
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
                        <strong>FB: <a href={social?.fb} target="_blank"
                                       rel="noopener noreferrer">{social?.fb}</a></strong>
                        <strong>LINKEDIN: <a href={social?.linkedin} target="_blank"
                                       rel="noopener noreferrer">{social?.linkedin}</a></strong>
                        <strong>Other: <a href={social?.other} target="_blank"
                                       rel="noopener noreferrer">{social?.other}</a></strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplate;
