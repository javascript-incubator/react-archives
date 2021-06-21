const removeLast = (array) => [...array.splice(0,array.length-1)].map(x=>'#'.concat(x)).join(' ');

export const slugToHashConvertor = (slug) => {
  return removeLast(slug.split('-'));
};
