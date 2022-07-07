export function areatriangle(missing, A, b, h) {
  if (missing == "A") {
    A = (b * h) / 2.0;
    return A.toFixed(4);
  } else if (missing == "b") {
    b = (2.0 * A) / h;
    return b.toFixed(4);
  } else if (missing == "h") {
    h = (2.0 * A) / b;
    return h.toFixed(4);
  }
}
export function heronsformula(missing, A, s, a, b, c) {
  if (missing == "A") {
    A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return A.toFixed(4);
  }
}

export function arearectangle(missing, A, l, w) {
  if (missing == "A") {
    A = l * w;
    return A.toFixed(4);
  } else if (missing == "l") {
    l = A / w;
    return l.toFixed(4);
  } else if (missing == "w") {
    w = A / l;
    return w.toFixed(4);
  }
}
export function areasquare(missing, A, s) {
  if (missing == "A") {
    A = Math.pow(s, 2);
    return A.toFixed(4);
  } else if (missing == "s") {
    s = Math.sqrt(A);
    return s.toFixed(4);
  }
}

export function areaparallelogram1(missing, A, b, h) {
  if (missing == "A") {
    A = b * h;
    return A.toFixed(4);
  } else if (missing == "b") {
    b = A / h;
    return b.toFixed(4);
  } else if (missing == "h") {
    h = A / b;
    return h.toFixed(4);
  }
}
export function areaparallelogram2(missing, A, a, b, theta) {
  if (missing == "A") {
    A = a * b * Math.sin(theta);
    return A.toFixed(4);
  } else if (missing == "a") {
    a = A / (b * Math.sin(theta));
    return a.toFixed(4);
  } else if (missing == "b") {
    b = A / (a * Math.sin(theta));
    return b.toFixed(4);
  } else if (missing == "theta") {
    theta = Math.asin((A / a) * b);
    return theta.toFixed(4);
  }
}
export function areaparallelogram3(missing, A, d1, d2, y) {
  //a=1/2d1 d2 siny
  if (missing == "A") {
    A = (d1 * d2 * Math.sin(y)) / 2;
    return A.toFixed(4);
  } else if (missing == "d1") {
    d1 = (2 * A) / (Math.sin(y) * d2);
    return d1.toFixed(4);
  } else if (missing == "d2") {
    d2 = (2 * A) / (Math.sin(y) * d1);
    return d2.toFixed(4);
  } else if (missing == "y") {
    y = Math.asin((2 * A) / (d1 * d2));
    return y.toFixed(4);
  }
}

export function areatrapezoid(missing, A, a, b, h) {
  if (missing == "A") {
    A = (h * (a + b)) / 2;
    return A.toFixed(4);
  } else if (missing == "a") {
    a = (2 * A) / h - b;
    return a.toFixed(4);
  } else if (missing == "b") {
    b = (2 * A) / h - a;
    return b.toFixed(4);
  } else if (missing == "h") {
    h = (2 * A) / (a + b);
    return h.toFixed(4);
  }
}
export function areacircle(missing, A, r) {
  if (missing == "A") {
    A = Math.PI * Math.pow(r, 2);
    return A.toFixed(4);
  } else if (missing == "r") {
    r = Math.sqrt(A / Math.PI);
    return r.toFixed(4);
  }
}
export function areaellipse(missing, A, a, b) {
  if (missing == "A") {
    A = Math.PI * a * b;
    return A.toFixed(4);
  } else if (missing == "a") {
    a = A / (Math.PI * b);
    return a.toFixed(4);
  } else if (missing == "b") {
    b = A / (Math.PI * a);
    return b.toFixed(4);
  }
}

export function surfacearearectprism(missing, SA, l, w, h) {
  SA = Number(SA);
  l = Number(l);
  w = Number(w);
  h = Number(h);
  if (missing == "SA") {
    SA = 2 * (l * w + l * h + h * w);
    return SA.toFixed(4);
  } else if (missing == "l") {
    l = (SA - 2 * w * h) / (w + h) / 2;
    return l.toFixed(4);
  } else if (missing == "w") {
    w = (SA - 2 * l * h) / (l + h) / 2;
    return w.toFixed(4);
  } else if (missing == "h") {
    h = (SA - 2 * w * l) / (w + l) / 2;
    return h.toFixed(4);
  }
}
export function surfaceareacylinder(missing, SA, r, h) {
  SA = Number(SA);
  h = Number(h);
  r = Number(r);
  if (missing == "SA") {
    SA = 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
    return SA.toFixed(4);
  } else if (missing == "r") {
    var r1 =
      (-Math.PI * h +
        Math.sqrt(Math.PI * (2 * SA + Math.PI * Math.pow(h, 2)))) /
      (2 * Math.PI);
    var r2 =
      -(
        Math.PI * h +
        Math.sqrt(Math.PI * (2 * SA + Math.PI * Math.pow(h, 2)))
      ) /
      (2 * Math.PI);
    return r1 > 0 ? r1.toFixed(4) : r2.toFixed(4);
  } else if (missing == "h") {
    h = SA / (2 * Math.PI * r) - r;
    return h.toFixed(4);
  }
}
export function surfacearearightrectpyramid(missing, SA, l, w, h) {
  //look back into (no need to find l,w,h?)
  // cant find h?
  SA = Number(SA);
  l = Number(l);
  w = Number(w);
  h = Number(h);
  if (missing == "SA") {
    SA =
      l * w +
      Math.sqrt(Math.pow(w / 2, 2) + Math.pow(h, 2)) +
      w * Math.sqrt(Math.pow(l / 2, 2) + Math.pow(h, 2));
    return SA.toFixed(4);
  } else if (missing == "l") {
    var l1 =
      (4 * SA -
        2 * Math.sqrt(Math.pow(w, 2) + 4 * Math.pow(h, 2)) +
        Math.sqrt(
          Math.pow(w, 2) +
            12 * Math.pow(w, 2) * Math.pow(h, 2) -
            4 * SA * Math.sqrt(Math.pow(w, 2) + 4 * Math.pow(h, 2)) +
            4 * Math.pow(SA, 2) +
            4 * Math.pow(h, 2)
        )) /
      (w * 3);
    var l2 =
      (4 * SA -
        2 * Math.sqrt(Math.pow(w, 2) + 4 * Math.pow(h, 2)) -
        Math.sqrt(
          Math.pow(w, 2) +
            12 * Math.pow(w, 2) * Math.pow(h, 2) -
            4 * SA * Math.sqrt(Math.pow(w, 2) + 4 * Math.pow(h, 2)) +
            4 * Math.pow(SA, 2) +
            4 * Math.pow(h, 2)
        )) /
      (w * 3);
    return l1 > 0 ? l1.toFixed(4) : l2.toFixed(4);
  } else if (missing == "w") {
    var w1 =
      (2 *
        (2 * SA * l +
          SA * Math.sqrt(4 * Math.pow(h, 2) + Math.pow(l, 2)) +
          Math.sqrt(
            4 * Math.pow(h, 4) +
              5 * Math.pow(l, 2) * Math.pow(h, 2) +
              4 *
                l *
                Math.pow(h, 2) *
                Math.sqrt(4 * Math.pow(h, 2) + Math.pow(l, 2)) -
              Math.pow(h, 2) +
              Math.pow(SA, 2)
          ))) /
      (5 * Math.pow(l, 2) +
        4 * Math.pow(h, 2) +
        4 * l * Math.sqrt(4 * Math.pow(h, 2) + Math.pow(l, 2)) -
        l);
    var w2 =
      (2 *
        (2 * SA * l +
          SA * Math.sqrt(4 * Math.pow(h, 2) + Math.pow(l, 2)) -
          Math.sqrt(
            4 * Math.pow(h, 4) +
              5 * Math.pow(l, 2) * Math.pow(h, 2) +
              4 *
                l *
                Math.pow(h, 2) *
                Math.sqrt(4 * Math.pow(h, 2) + Math.pow(l, 2)) -
              Math.pow(h, 2) +
              Math.pow(SA, 2)
          ))) /
      (5 * Math.pow(l, 2) +
        4 * Math.pow(h, 2) +
        4 * l * Math.sqrt(4 * Math.pow(h, 2) + Math.pow(l, 2)) -
        l);
    return w1 > 0 ? w1.toFixed(4) : w2.toFixed(4);
  }
}
export function surfaceareacone(missing, SA, r, h) {
  SA = Number(SA);
  r = Number(r);
  h = Number(h);
  if (missing == "SA") {
    SA = Math.PI * r * (r + Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2)));
    return SA.toFixed(4);
  } else if (missing == "r") {
    var r1 =
      (SA * Math.sqrt(Math.PI * (2 * SA + Math.PI * Math.pow(h, 2)))) /
      (2 * Math.PI * SA + Math.pow(Math.PI, 2) * Math.pow(h, 2));
    var r2 =
      -(SA * Math.sqrt(Math.PI * (2 * SA + Math.PI * Math.pow(h, 2)))) /
      (2 * Math.PI * SA + Math.pow(Math.PI, 2) * Math.pow(h, 2));
    return r1 > 0 ? r1.toFixed(4) : r2.toFixed(4);
  } else if (missing == "h") {
    var h1 = Math.sqrt(
      (Math.pow(SA, 2) - 2 * Math.PI * SA * Math.pow(r, 2)) /
        (Math.pow(Math.PI, 2) * Math.pow(r, 2))
    );
    var h2 = -Math.sqrt(
      (Math.pow(SA, 2) - 2 * Math.PI * SA * Math.pow(r, 2)) /
        (Math.pow(Math.PI, 2) * Math.pow(r, 2))
    );
    return h1 > 0 ? h1.toFixed(4) : h2.toFixed(4);
  }
}
export function surfaceareasphere(missing, SA, r) {
  SA = Number(SA);
  r = Number(r);
  if (missing == "SA") {
    SA = 4 * Math.PI * Math.pow(r, 2);
    return SA.toFixed(4);
  } else if (missing == "r") {
    r = Math.sqrt(SA / (4 * Math.PI));
    return r.toFixed(4);
  }
}
export function surfaceareacube(missing, SA, a) {
  SA = Number(SA);
  a = Number(a);
  if (missing == "SA") {
    SA = 6 * Math.pow(a, 2);
    return SA.toFixed(4);
  } else if (missing == "a") {
    a = Math.sqrt(SA / 6);
    return a.toFixed(4);
  }
}
export function surfaceareatorus(missing, SA, R, r) {
  SA = Number(SA);
  r = Number(r);
  R = Number(R);
  if (missing == "SA") {
    SA = Math.pow(Math.PI, 2) * (Math.pow(R, 2) - Math.pow(r, 2));
    return SA.toFixed(4);
  } else if (missing == "R") {
    var R1 = Math.sqrt(SA + Math.pow(Math.PI, 2) * Math.pow(r, 2)) / Math.PI;
    var R2 = -Math.sqrt(SA + Math.pow(Math.PI, 2) * Math.pow(r, 2)) / Math.PI;
    return R1 > 0 ? R1.toFixed(4) : R2.toFixed(4);
  } else if (missing == "r") {
    var r1 = Math.sqrt(
      -(SA - Math.pow(Math.PI, 2) * Math.pow(R, 2)) / Math.pow(Math.PI, 2)
    );
    var r2 = -Math.sqrt(
      -(SA - Math.pow(Math.PI, 2) * Math.pow(R, 2)) / Math.pow(Math.PI, 2)
    );
    return r1 > 0 ? r1.toFixed(4) : r2.toFixed(4);
  }
}
export function surfaceareaellipsoid(missing, SA, a, b, c) {
  //cant find a,b,c
  SA = Number(SA);
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (missing == "SA") {
    SA =
      4 *
      Math.PI *
      Math.pow(
        (Math.pow(a * b, 1.6) + Math.pow(a * c, 1.6) + Math.pow(b * c, 1.6)) /
          3,
        1 / 1.6
      );
    return SA.toFixed(4);
  }
}

export function volumerectprism(missing, V, l, w, h) {
  V = Number(V);
  l = Number(l);
  w = Number(w);
  h = Number(h);
  if (missing == "V") {
    V = l * w * h;
    return V.toFixed(4);
  } else if (missing == "l") {
    l = V / (w * h);
    return l.toFixed(4);
  } else if (missing == "w") {
    w = V / (l * h);
    return w.toFixed(4);
  } else if (missing == "h") {
    h = V / (w * l);
    return h.toFixed(4);
  }
}
export function volumecylinder(missing, V, r, h) {
  V = Number(V);
  r = Number(r);
  h = Number(h);
  if (missing == "V") {
    V = Math.PI * Math.pow(r, 2) * h;
    return V.toFixed(4);
  } else if (missing == "r") {
    r = Math.sqrt(V / (Math.PI * h));
    return r.toFixed(4);
  } else if (missing == "h") {
    h = V / (Math.PI * Math.pow(r, 2));
    return h.toFixed(4);
  }
}
export function volumepyramid(missing, V, l, w, h) {
  V = Number(V);
  l = Number(l);
  w = Number(w);
  h = Number(h);
  if (missing == "V") {
    V = (l * w * h) / 3;
    return V.toFixed(4);
  } else if (missing == "l") {
    l = (V * 3) / (w * h);
    return l.toFixed(4);
  } else if (missing == "w") {
    w = (V * 3) / (l * h);
    return w.toFixed(4);
  } else if (missing == "h") {
    h = (V * 3) / (l * w);
    return h.toFixed(4);
  }
}
export function volumecone(missing, V, r, h) {
  V = Number(V);
  r = Number(r);
  h = Number(h);
  if (missing == "V") {
    V = (Math.PI * Math.pow(r, 2) * h) / 3;
    return V.toFixed(4);
  } else if (missing == "r") {
    r = Math.sqrt((3 * V) / (Math.PI * h));
    return r.toFixed(4);
  } else if (missing == "h") {
    h = (3 * V) / (Math.PI * Math.pow(r, 2));
    return h.toFixed(4);
  }
}
export function volumesphere(missing, V, r) {
  V = Number(V);
  r = Number(r);
  if (missing == "V") {
    V = (4 * Math.PI * Math.pow(r, 3)) / 3;
    return V.toFixed(4);
  } else if (missing == "r") {
    r = Math.cbrt((3 * V) / (Math.PI * 4));
    return r.toFixed(4);
  }
}
export function volumecube(missing, V, a) {
  V = Number(V);
  a = Number(a);
  if (missing == "V") {
    V = Math.pow(a, 3);
    return V.toFixed(4);
  } else if (missing == "a") {
    a = Math.cbrt(V);
    return a.toFixed(4);
  }
}
export function volumetorus(missing, V, R, r) {
  V = Number(V);
  R = Number(R);
  r = Number(r);
  if (missing == "V") {
    V = 2 * Math.pow(r, 2) * Math.pow(Math.PI, 2) * R;
    return V.toFixed(4);
  } else if (missing == "r") {
    r = Math.sqrt(V / (2 * Math.pow(Math.PI, 2) * R));
    return r.toFixed(4);
  } else if (missing == "R") {
    R = V / (2 * Math.pow(Math.PI, 2) * Math.pow(r, 2));
    return R.toFixed(4);
  }
}
export function volumeellipsoid(missing, V, a, b, c) {
  V = Number(V);
  a = Number(a);
  b = Number(b);
  c = Number(c);
  if (missing == "V") {
    V = (4 * Math.PI * a * b * c) / 3;
    return V.toFixed(4);
  } else if (missing == "a") {
    a = (3 * V) / (4 * Math.PI * b * c);
    return a.toFixed(4);
  } else if (missing == "b") {
    b = (3 * V) / (4 * Math.PI * a * c);
    return b.toFixed(4);
  } else if (missing == "c") {
    c = (3 * V) / (4 * Math.PI * a * b);
    return c.toFixed(4);
  }
}

export function circlearclength(missing, s, r, angle, degreeSelected) {
  // radians
  if (degreeSelected == false) {
    if (missing == "s") {
      s = r * angle;
      return s.toFixed(4);
    } else if (missing == "angle") {
      angle = s / r;
      return radian.toFixed(4) + " radians";
    } else if (missing == "r") {
      r = s / angle;
      return r.toFixed(4);
    }
  }
  //degrees
  if (degreeSelected == true) {
    if (missing == "s") {
      s = (2 * Math.PI * r * angle) / 360;
      return s.toFixed(4);
    } else if (missing == "angle") {
      angle = (180 * s) / (Math.PI * r);
      return angle.toFixed(4);
    } else if (missing == "r") {
      r = (180 * s) / (Math.PI * angle);
      return r.toFixed(4);
    }
  }
}
export function circleareasector(missing, A, r, angle, degreeSelected) {
  // the unused one (deg or rad) must = false
  // radians
  if (degreeSelected == false) {
    if (missing == "A") {
      A = (angle * Math.pow(r, 2)) / 2;
      return A.toFixed(4);
    } else if (missing == "angle") {
      angle = s / r;
      return angle.toFixed(4);
    } else if (missing == "r") {
      r = Math.sqrt((2 * A) / angle);
      return r.toFixed(4);
    }
  }
  //degrees
  if (degreeSelected == true) {
    if (missing == "A") {
      A = (Math.pow(r, 2) * angle * Math.PI) / 360;
      return A.toFixed(4);
    } else if (missing == "angle") {
      angle = (360 * A) / (Math.PI * Math.pow(r, 2));
      return angle.toFixed(4);
    } else if (missing == "r") {
      r = Math.sqrt((A * 360) / (Math.PI * angle));
      return r.toFixed(4);
    }
  }
}
export function circlecircumference(missing, C, rd, selected) {
  if (selected == false) {
    if (missing == "C") {
      C = 2 * Math.PI * rd;
      return C.toFixed(4);
    } else if (missing == "rd") {
      rd = C / (2 * Math.PI);
      return rd.toFixed(4);
    }
  } else if (selected == false) {
    if (missing == "rd") {
      rd = C / Math.PI;
      return rd.toFixed(4);
    }
  }
}

//----
export function transformrotation(missing, arg1, arg2, arg3) {}
export function transformtranslation(missing, arg1, arg2, arg3, arg4) {}
export function transformreflection(missing, arg1, arg2, arg3) {}
export function transformdilation(missing, arg1, arg2, arg3) {}
//----

export function quadraticequation(missing, x, a, b, c) {
  // cant find b,c (maybe dont use a either)
  if (missing == "x") {
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return x1.toFixed(4) + " " + x2.toFixed(4);
  }
  //  else if (missing == "a") {
  //   a1 = -(b * x + c / Math.pow(x, 2));
  //   a2 = 0;
  //   return a1 > 0 ? a1.toFixed(4) : a2.toFixed(4);
  // }
}

export function distanceformula(missing, d, x1, x2, y1, y2) {
  if (missing == "d") {
    d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return d.toFixed(4);
  }
}
export function midpointformula(missing, xm, ym, x1, x2, y1, y2) {
  if (missing == "xmym") {
    xm = (x1 + x2) / 2;
    ym = (y1 + y2) / 2;
    return "(" + xm + ", " + ym + ")";
  } else if (missing == "x1y1") {
  } else if (missing == "x2y2") {
  }
}
export function slope(missing, m, x1, x2, y1, y2) {
  if (missing == "m") {
    m = (y2 - y1) / (x2 - x1);
    return m;
  } else if (missing == "x1y1") {
  } else if (missing == "x2y2") {
  }
}

export function exponentialgrowthdecay(missing, P, a, b, x) {
  if (missing == "P") {
    P = a * Math.pow(b, x);
    return P;
  } else if (missing == "a") {
    return a;
  } else if (missing == "b") {
    return b;
  }
}

export function arithmeticsequence(missing, an, a1, n, d) {
  //no d
  an = Number(an);
  a1 = Number(a1);
  n = Number(n);
  d = Number(d);
  if (missing == "an") {
    an = a1 + (n - 1) * d;
    return an.toFixed(4);
  } else if (missing == "a1") {
    a1 = an - (n - 1) * d;
    return a1.toFixed(4);
  } else if (missing == "n") {
    n = (an - a1) / d + 1;
    return n.toFixed(4);
  } else if (missing == "d") {
    d = (an - a1) / (n - 1);
    return d.toFixed(4);
  }
}
export function geometricsequence(missing, an, a1, r, n) {
  // no r
  an = Number(an);
  a1 = Number(a1);
  r = Number(r);
  n = Number(n);
  if (missing == "an") {
    an = a1 * Math.pow(r, n - 1);
    return an.toFixed(4);
  } else if (missing == "a1") {
    a1 = an / Math.pow(r, n - 1);
    return a1.toFixed(4);
  } else if (missing == "n") {
    n = Math.log(an / a1) / Math.log(r) + 1;
    return n.toFixed(4);
  }
}
