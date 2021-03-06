import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Certificação Digital é com a YouCertificados - Suzano",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="mt-0 mb-8">e-CPF A1</h3>
                  <h4 className="mt-0 mb-8">R$ 155,00</h4>
                  <p className="m-0 text-sm">
                    Certificado Digital e-CPF ICP-Brasil para Pessoa Fisíca
                  </p>
                  <button
                    className="mt-12 button button-primary button-wide-mobile button-sm"
                    
                  >
                    <a href="https://api.whatsapp.com/send?phone=5511950486548&text=Ol%C3%A1%20Andr%C3%A9%2C%20tudo%20bem%3F%20Quero%20adquirir%20o%20meu%20e-CPF%20A1!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20e%20os%20procedimentos%20necess%C3%A1rios%3F">Compre agora</a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="mt-0 mb-8">e-CNPJ A1</h3>
                  <h4 className="mt-0 mb-8">R$ 232,00</h4>
                  <p className="m-0 text-sm">
                    Certificado Digital e-CNPJ ICP-Brasil para Pessoa Jurídica
                  </p>
                  <button
                    className="mt-12 button button-primary button-wide-mobile button-sm"
                    
                  >
                    <a href="https://api.whatsapp.com/send?phone=5511950486548&text=Ol%C3%A1%20Andr%C3%A9%2C%20tudo%20bem%3F%20Quero%20adquirir%20o%20meu%20e-CNPJ%20A1!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20e%20os%20procedimentos%20necess%C3%A1rios%3F">Compre agora</a>
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="mt-0 mb-8">e-CNPJ MEI</h3>
                  <h4 className="mt-0 mb-8">R$ 200,00</h4>
                  <p className="m-0 text-sm">
                    Certificado Digital e-CNPJ MEI ICP-Brasil EXCLUSIVO para
                    Micro Empreendedor Individual.
                  </p>
                  <button
                    className="mt-12 button button-primary button-wide-mobile button-sm"
                    
                  >
                    <a href="https://api.whatsapp.com/send?phone=5511950486548&text=Ol%C3%A1%20Andr%C3%A9%2C%20tudo%20bem%3F%20Quero%20adquirir%20o%20meu%20e-CNPJ%20MEI%20A1!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20e%20os%20procedimentos%20necess%C3%A1rios%3F">Compre agora</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
