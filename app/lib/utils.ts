// Generate a hex color form text
String.prototype.toColor = function () {
  var colors = [
    'text-red-500',
    'text-orange-500',
    'text-amber-500',
    'text-yellow-500',
    'text-lime-500',
    'text-green-500',
    'text-emerald-500',
    'text-teal-500',
    'text-cyan-500',
    'text-sky-500',
    'text-blue-500',
    'text-indigo-500',
    'text-violet-500',
    'text-purple-500',
    'text-fuchsia-500',
    'text-pink-500',
    'text-rose-500',
  ];

  var hash = 0;
  if (this.length === 0) return '#00000000';
  for (var i = 0; i < this.length; i++) {
    hash = this.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
};

// Generate a hex color form text
export const textToColor = (text: string) => {
  var colors = [
    'text-red-500',
    'text-orange-500',
    'text-amber-500',
    'text-yellow-500',
    'text-lime-500',
    'text-green-500',
    'text-emerald-500',
    'text-teal-500',
    'text-cyan-500',
    'text-sky-500',
    'text-blue-500',
    'text-indigo-500',
    'text-violet-500',
    'text-purple-500',
    'text-fuchsia-500',
    'text-pink-500',
    'text-rose-500',
  ];

  var hash = 0;
  if (text.length === 0) return '#00000000';
  for (var i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
};
