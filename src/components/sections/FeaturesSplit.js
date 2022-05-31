import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { Link } from "react-router-dom";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Sobre seu Certificado Digital",
    paragraph:
      "Algumas informações importantes sobre os certificados digitais e serviços que oferecemos juntamente aos certificados",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Renovação</h3>
                <p className="m-0">
                  Simplifique seus negócios! Renove seu certificado digital
                  agora, sem sair de casa!
                </p>
                <button className="mt-12 button button-primary button-wide-mobile button-sm">
                  <a href="https://api.whatsapp.com/send?phone=5511950486548&text=Ol%C3%A1%20Andr%C3%A9%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20a%20renova%C3%A7%C3%A3o%20do%20certificado%20digital.">Renove agora</a> 
                </button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-01.jpg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Aplicações e usos</h3>
                <p className="m-0">
                  Conheça as principais aplicações e usos do certificado digital
                  para você ou sua empresa.
                </p>
                <button
                  className="mt-12 button button-primary button-wide-mobile button-sm"
                >
                 <a href="https://youcertificados.com.br/usos">Saiba Mais</a>
                </button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-02.jpg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Teste seu Certificado</h3>
                <p className="m-0">
                  Disponibilizamos um ambiente para testar o funcionamento do
                  seu certificado digital.
                </p>
                <button
                  className="mt-12 button button-primary button-wide-mobile button-sm"
                >
                 <a href="https://cert-checker.vpki.com.br/cert-checker-web/pages/public/welcome.jsf?faces-redirect=true#second">Teste Agora Mesmo</a>
                </button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Obrigatoriedades</h3>
                <p className="m-0">
                  Esteja por dentro das mais recentes obrigatoriedades de
                  utilização do Certificado Digital.
                </p>
                <button
                  className="mt-12 button button-primary button-wide-mobile button-sm"
                  href="https://cert-checker.vpki.com.br/cert-checker-web/pages/public/welcome.jsf?faces-redirect=true#second"
                >
                  <a href="https://youcertificados.com.br/conteudo/Obrigatoriedades-do-m%C3%AAs-de-mar%C3%A7o-de-2017-13822">Conheça suas obrigatoriedades</a>
                </button>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
