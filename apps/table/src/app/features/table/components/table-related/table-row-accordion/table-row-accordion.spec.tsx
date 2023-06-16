import { render } from '@testing-library/react';

import { TableNextStepButton } from '../navigation/table-next-step-button/table-next-step-button';
import { TableRowAccordion } from './table-row-accordion';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('TableRowAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <table>
        <tbody>
          <TableRowAccordion
            key={'unique identifier'}
            itemKey={'unique identifier'}
            cols={['Id', 'Name', <TableNextStepButton text="See user posts" />]}
            detailsBody={
              <>
                <div>
                  Some component which purpose is to show detailed data. Button
                  below is needed for smaller screen sizes. Ref is used for
                  triggering data fetch. (useInteresection)
                </div>
                <TableNextStepButton
                  className="lg:hidden"
                  text="See user posts"
                />
              </>
            }
            ref={null}
          />
        </tbody>
      </table>
    );
    expect(baseElement).toBeTruthy();
  });
});
