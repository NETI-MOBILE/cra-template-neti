type Param = string | number;
type ParamObj = {
  p: string;
  v: Param;
};

export const makePath = (path: string, params: Param | ParamObj[] | null) => {
  if (!params) {
    console.error('makePath: param is null');
    return '';
  }

  if (Array.isArray(params)) {
    let outputPath = path;

    params.map(({ p, v }) => {
      outputPath = outputPath.replace(`:${p}`, String(v));

      return null;
    });

    return outputPath;
  }

  return path.replace(/:\w+/gm, String(params));
};
