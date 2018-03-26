// APP
import {
  swallowEvent,
  interpolate,
  validateInterpolationProps,
  isString,
  isBlank,
  isObject,
  isDate,
  getNextElementSibling,
  calcPositionOffset,
  findAncestor,
} from './Helpers';

describe('Utils: Helpers', () => {
  xdescribe('Method: swallowEvent(event)', () => {
    it('should be defined.', () => {
      let event = new Event('open');
      expect(swallowEvent(event));
    });
  });

  describe('Method: interpolate(str, props)', () => {
    it('should be defined.', () => {
      expect(interpolate('', {})).toBeDefined();
    });
    it('should be defined', () => {
      expect(interpolate).toBeDefined();
    });

    it('should interpolate using the right properties', () => {
      let format: string = '$name';
      let data: { name: string } = {
        name: 'Stuff',
      };
      let expected: string = 'Stuff';
      expect(interpolate(format, data)).toBe(expected);
    });

    it('should interpolate correctly when format requires 2 properties', () => {
      let format: string = '$firstName $lastName';
      let data: { firstName: string; lastName: string } = {
        firstName: 'James',
        lastName: 'Bond',
      };
      let expected: string = 'James Bond';
      expect(interpolate(format, data)).toBe(expected);
    });

    it('should interpolate correctly when format has non-replacable characters', () => {
      let format: string = '$id: $title';
      let data: { id: number; title: string } = {
        id: 213,
        title: 'Bond',
      };
      let expected: string = '213: Bond';
      expect(interpolate(format, data)).toBe(expected);
    });

    it('should interpolate correctly when properties are undefined', () => {
      let format: string = '$id: $title';
      let data: { id: number } = {
        id: 123,
      };
      let expected: string = '123: ';
      expect(interpolate(format, data)).toBe(expected);
    });
  });

  xdescribe('Method: validateInterpolationProps(str, props)', () => {
    it('should be defined.', () => {
      expect(validateInterpolationProps('', {})).toBeDefined();
    });
  });

  describe('Method: isString(obj)', () => {
    it('should be defined.', () => {
      expect(isString({})).toBeDefined();
    });
  });

  describe('Method: isBlank(obj)', () => {
    it('should be defined.', () => {
      expect(isBlank({})).toBeDefined();
    });
  });

  describe('Method: isEmpty(obj)', () => {
    it('should be defined.', () => {
      expect(isEmpty({})).toBeDefined();
    });
  });

  describe('Method: isFunction(obj)', () => {
    it('should be defined.', () => {
      expect(isFunction({})).toBeDefined();
    });
  });

  describe('Method: isDate(obj)', () => {
    it('should be defined.', () => {
      expect(isDate(1)).toBeDefined();
    });
  });

  describe('Method: sortByField(fields, reverse)', () => {
    it('should be defined.', () => {
      expect(sortByField(1, false)).toBeDefined();
    });
  });

  describe('Method: filterByField(key, value)', () => {
    it('should be defined.', () => {
      expect(filterByField(1, 1)).toBeDefined();
    });
  });

  describe('Method: getNextElementSibling(element)', () => {
    it('should return nextElementSibling if present.', () => {
      let parent = document.createElement('div');
      let origin = document.createElement('h1');
      let sibling = document.createElement('h2');
      parent.appendChild(origin);
      parent.appendChild(sibling);
      expect(getNextElementSibling(origin)).toEqual(sibling);
    });
    it('should skip over non-element sibling nodes.', () => {
      let parent = document.createElement('div');
      let origin = document.createElement('h1');
      let textNode = document.createTextNode('Some Text');
      let sibling = document.createElement('h2');
      parent.appendChild(origin);
      parent.appendChild(textNode);
      parent.appendChild(sibling);
      expect(getNextElementSibling(origin)).toEqual(sibling);
    });
    it('should return null if sibling is not present.', () => {
      let parent = document.createElement('div');
      let origin = document.createElement('h1');
      parent.appendChild(origin);
      expect(getNextElementSibling(origin)).toEqual(null);
    });
  });

  xdescribe('Method: calcPositionOffset(position, element, side)', () => {
    it('should be defined.', () => {
      let element = new Element();
      expect(calcPositionOffset({ bottom: 1, height: 1, left: 1, right: 1, top: 1, width: 1 }, element, 'right')).toBeDefined();
    });
  });

  xdescribe('Method: findAncestor(element, selector)', () => {
    it('should be defined.', () => {
      let element = new Element();
      expect(findAncestor(element, '1')).toBeDefined();
    });
  });
});
