import SVG, { Props as SVGProps } from 'react-inlinesvg';

interface IQIconProps extends SVGProps {}

const removeAttributes = (element: Element) => {
  element.removeAttribute('fill');
  element.removeAttribute('id');
  element.removeAttribute('fill-opacity');
  element.removeAttribute('stroke');
  element.removeAttribute('style');
  element.removeAttribute('data-name');

  if (element.tagName === 'title') {
    element.remove();
  }
};

const recursiveCleaning = (svg: SVGElement | Element) => {
  if (svg.children.length) {
    for (const key in svg.children) {
      if (Object.prototype.hasOwnProperty.call(svg.children, key)) {
        removeAttributes(svg.children[key]);

        if (svg.children[key].children.length) {
          recursiveCleaning(svg.children[key]);
        }
      }
    }
  }
};

const preProcessor = (code: string) => {
  const div = document.createElement('div');
  div.insertAdjacentHTML('afterbegin', code);
  const svg = div.querySelector('svg');

  if (svg) {
    removeAttributes(svg);
    recursiveCleaning(svg);
    svg.setAttribute('fill', 'currentColor');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
  }

  return svg?.outerHTML ? svg.outerHTML : '';
};

const QIcon: React.FC<IQIconProps> = ({ src, ...rest }) => {
  return <SVG src={src} preProcessor={preProcessor} {...rest} />;
};

export default QIcon;
