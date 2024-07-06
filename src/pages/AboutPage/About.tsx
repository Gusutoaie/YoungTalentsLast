import React from 'react';
import classes from './About.module.css';
// import rectorImage from './../../assets/images/rectorMGP-2048x2048-1-300x300.jpg'; // Update with the actual path to your image
import parallaxImage from './../../assets/images/2-scaled.jpg'; // Update with the actual path to your image

const About: React.FC = () => {
    return (
        <div className={classes.container}>
        <main id="main" className={`site-main col-sm-12 full-width ${classes.subContainer}`}>
            <article id="post-2901" className="post-2901 page type-page status-publish hentry">
                <div className="entry-content">
                    <div className={`vc_row wpb_row vc_row-fluid vc_custom_1471019067901 ${classes.heading}`}>
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner vc_custom_1605692758383">
                                <div className="wpb_wrapper">
                                    <div className={classes.headingTitle}>
                                        <div className={`sc_heading text-center ${classes.textCenter}`}>
                                            <h3 className="title">Despre noi</h3>
                                            <span className={classes.line}></span>
                                        </div>
                                    </div>
                                    <div className={`wpb_text_column wpb_content_element ${classes.content}`}>
                                        <div className="wpb_wrapper">
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    “ Universitatea de Vest din Timișoara înțelege faptul că o comunitate puternică se bazează pe valorile asumate de-a lungul timpului de către membrii săi și că oamenii sunt cei care îi dau consistență și îi conturează dezvoltarea.&nbsp; Astfel, investește timp și resurse în susținerea membrilor săi, conștientă fiind că prestigiul ei depinde într-o foarte mare măsură de aceștia.&nbsp;
                                                </span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pentru&nbsp; noi, </span>
                                                <span style={{ fontWeight: 400 }}>
                                                    absolvenți, studenți, parteneri, colaboratori, cadre didactice,&nbsp; Universitatea de Vest din Timișoara reprezintă mult mai mult decât locul unde ne finalizăm studiile,&nbsp; implementăm proiecte de anvergură, dezvoltăm parteneriate academice, culturale sau socio-economice, urmărind dezvoltarea unui proces continuu de performanță în comunitate, atât la nivel individual cât și profesional.&nbsp;
                                                </span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Te așteptăm cu drag și entuziasm să faci parte din comunitatea Alumni UVTerra, prin completarea formularului de înscriere ca membru.”
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`vc_row wpb_row vc_row-fluid vc_custom_1471796791252 ${classes.content}`}>
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner vc_custom_1605692791532">
                                <div className="wpb_wrapper">
                                    <div className={`wpb_text_column wpb_content_element vc_custom_1607591908346 ${classes.textCenter}`}>
                                        <div className="wpb_wrapper">
                                            {/* <p>
                                                <em>
                                                    <img
                                                        loading="lazy"
                                                        className={`size-medium wp-image-11582 alignnone alignright ${classes.image}`}
                                                        src={rectorImage}
                                                        alt="Rector"
                                                        width="300"
                                                        height="300"
                                                    />
                                                </em>
                                            </p> */}
                                            <div className="elementor-widget-wrap">
                                                <div className="elementor-element elementor-element-a50fe0d elementor-widget elementor-widget-heading" data-id="a50fe0d" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h5 className={`elementor-heading-title elementor-size-default ${classes.textCenter} ${classes.bold}`}>Rectorul UVT,</h5>
                                                        <p className={classes.textCenter}>
                                                            <img
                                                                loading="lazy"
                                                                className="lazyloaded alignnone"
                                                                title=""
                                                                src="https://uvt.ro/wp-content/uploads/2020/10/semnatura-rector.jpg"
                                                                alt="Signature"
                                                                width="246"
                                                                height="87"
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-4f02c81 elementor-widget elementor-widget-heading" data-id="4f02c81" data-element_type="widget" data-widget_type="heading.default">
                                                    <div className="elementor-widget-container">
                                                        <h5 className={`elementor-heading-title elementor-size-default ${classes.textCenter}`}>Prof. univ. dr. Marilen Gabriel PIRTEA</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_2 vc_sep_pos_align_center vc_separator_no_text ${classes.vcSeparator}`}>
                                        <span className="vc_sep_holder vc_sep_holder_l">
                                            <span className={classes.vc_sep_line}></span>
                                        </span>
                                        <span className="vc_sep_holder vc_sep_holder_r">
                                            <span className={classes.vc_sep_line}></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`vc_row wpb_row vc_row-fluid vc_custom_1471796791252 ${classes.content}`}>
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner vc_custom_1471796770554">
                                <div className="wpb_wrapper">
                                    <div className="thim-widget-heading">
                                        <div className={`sc_heading text-center ${classes.textCenter}`}>
                                            <h3 className="title">Ce ne propunem?</h3>
                                            <span style={{ backgroundColor: '#dd9933' }} className={classes.line}></span>
                                        </div>
                                    </div>
                                    <div className={`wpb_text_column wpb_content_element ${classes.content}`}>
                                        <div className="wpb_wrapper">
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    Ne propunem </span><b>o prezență activă în mediul socio-economic din care facem parte</b><span style={{ fontWeight: 400 }}>, ne propunem să facem accesibile cunoașterea, arta și sportul, fără compromis în ceea ce privește asimilarea acestor doctrine.&nbsp;
                                                </span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    Această dimensiune a implicării </span><b>ne unește în diversitatea noastră</b><span style={{ fontWeight: 400 }}>, prin străduința noastră de a oferi în comunitate evenimente ştiinţifice, culturale, artistice şi sportive, în care invitaţii sunt personalităţi recunoscute pe plan naţional şi internaţional.&nbsp;
                                                </span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    “Think out the box” este credința în baza căreia noi&nbsp; activăm în ultimii ani, fără tipare impuse, cu flexibilitate, determinare și atitudine proactivă.
                                                </span>
                                            </p>
                                            <p>
                                                <span style={{ fontWeight: 400 }}>
                                                    În comunitatea Alumni UVTerra&nbsp; își dau întâlnire oameni, idei, proiecte, perspective, toate întru </span><b><i>valorificarea educației academice oferită de UVT în și pentru societate.</i></b>
                                            </p>
                                            <p>&nbsp;</p>
                                            <h2 className={classes.textCenter}>
                                                <span style={{ color: '#ff6600' }}><b><i>Descoperim excelența! Cariera devine un vis împlinit!</i></b></span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`vc_row wpb_row vc_row-fluid vc_row-has-fill vc_row-no-padding vc_general vc_parallax vc_parallax-content-moving-fade js-vc_parallax-o-fade ${classes.parallax}`}>
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" style={{ height: '460px' }}>
                                        <span className="vc_empty_space_inner"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
        </div>
    );
};

export default About;
