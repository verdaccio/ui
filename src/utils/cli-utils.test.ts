import { SyntheticEvent } from 'react';

import { copyToClipBoardUtility } from './cli-utils';

describe('copyToClipBoardUtility', () => {
  let originalGetSelection;

  const mockGetSelectionResult = {
    removeAllRanges: jest.fn(),
    addRange: jest.fn(),
  };
  beforeEach(() => {
    originalGetSelection = window.getSelection;

    window.getSelection = jest.fn().mockReturnValue(mockGetSelectionResult);
  });
  afterEach(() => {
    window.getSelection = originalGetSelection;
    jest.restoreAllMocks();
  });

  test('should call the DOM APIs', () => {
    // Given
    const testEvent: { preventDefault: Function } = {
      preventDefault: jest.fn(),
    };
    const testCopy = 'copy text';
    const spys = {
      createElement: jest.spyOn(document, 'createElement'),
      execCommand: jest.spyOn(document, 'execCommand'),
      appendChild: jest.spyOn(document.body, 'appendChild'),
      removeChild: jest.spyOn(document.body, 'removeChild'),
    };
    const expectedDiv = document.createElement('div');
    expectedDiv.innerText = testCopy;

    // When
    const copyFunc = copyToClipBoardUtility(testCopy);
    copyFunc(testEvent as SyntheticEvent<HTMLElement>);

    // Then
    expect(mockGetSelectionResult.removeAllRanges).toHaveBeenCalledWith();
    expect(mockGetSelectionResult.addRange).toHaveBeenCalled();
    expect(spys.createElement).toHaveBeenCalledWith('div');
    expect(spys.appendChild).toHaveBeenCalledWith(expectedDiv);
    expect(spys.execCommand).toHaveBeenCalledWith('copy');
    expect(spys.removeChild).toHaveBeenCalledWith(expectedDiv);
  });
});
