const img = (category: string, filename: string) =>
  `/images/${category}/${encodeURIComponent(filename)}`;

export const collages = [
  'WhatsApp Image 2026-04-21 at 09.16.07.jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (1).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (2).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (3).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (4).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (7).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (8).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (10).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (11).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (12).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (13).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (14).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (15).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (16).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (17).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (18).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (19).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (20).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (21).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (22).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (23).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (24).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (25).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (26).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (27).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (44).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (45).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (46).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (47).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (48).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (49).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (50).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (51).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (52).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (53).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (54).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (55).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (56).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (57).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (58).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (59).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (60).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (61).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (62).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.08.jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.08 (1).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.08 (2).jpeg',
].map(f => img('collages', f));

export const drawings = [
  'WhatsApp Image 2026-04-21 at 09.16.07 (5).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (6).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (9).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (28).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (29).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (30).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (31).jpeg',
].map(f => img('drawings', f));

export const jewelry = [
  'WhatsApp Image 2026-04-21 at 09.16.07 (32).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (33).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (34).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (35).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (37).jpeg',
].map(f => img('jewelry', f));

export const poterie = [
  'WhatsApp Image 2026-04-21 at 09.16.07 (36).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (38).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (39).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (40).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (41).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (42).jpeg',
  'WhatsApp Image 2026-04-21 at 09.16.07 (43).jpeg',
].map(f => img('poterie', f));

export const heroImage = collages[0];
export const featuredImage = img('collages', 'WhatsApp Image 2026-04-21 at 09.16.07 (17).jpeg');
