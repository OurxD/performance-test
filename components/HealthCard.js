/* eslint-disable jsx-a11y/anchor-has-content, react/prop-types */
import React from 'react';
import PerformantImage from './PerformantImage';

const imageSizes = [444];

const HealthCard = ({
  title,
  subtitle,
  image,
}) => (
  <div className="col-sm">
    <div className="TempoCategoryTile  u-focusTile">
      <div className="TempoCategoryTile-tile valign-top">
        <div className="TempoCategoryTile-imgContainer" aria-hidden="true">
          <div
            style={{
              'padding-bottom': '140.09%',
              height: 0,
              width: '100%',
              position: 'relative',
            }}
          >
            <PerformantImage
              alt="Nothing to sneeze at. Get relief from seasonal allergies with Zyrtec, Flonase, and more."
              ariaHidden="true"
              source={image}
              sizes={imageSizes}
              className="TempoCategoryTile-img"
              style={{
                position: 'absolute',
                width: '100%',
                left: 0,
                top: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="MultiStoryModule-overlay" aria-hidden="true">
      <p className="MultiStoryModule-overlayHeading text-center">{title}</p>
      <p className="MultiStoryModule-overlayText text-center">{subtitle}</p>
    </div>
    <a className="MultiStoryModule-overlayLink" href="https://www.walmart.com/browse/health/allergy-and-sinus/976760_3771182?athcpid=5c566c22-4c5a-490f-ae16-32294b83f424&amp;athpgid=athenaHomepage&amp;athznid=athenaModuleZone&amp;athmtid=AthenaMultiStoryModule&amp;athtvid=2&amp;athena=true&amp;athstid=CS012&amp;athftid=P0000&amp;athguid=466001f5-46cfa622-bc284bfc9a18a716" aria-label="Nothing to sneeze at Get relief from seasonal allergies with Zyrtec, Flonase, and more." data-uid="sRM4cyww" />
  </div>
);

export default HealthCard;
