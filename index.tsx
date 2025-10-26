/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// --- CONFIGURATIONS ---
const configs = {
    ps: {
      stateKey: 'publicSecurityReportState',
      reportName: 'الأمن العام',
      reportHeader: 'تم استلام مهام العمليات لمنطقة ساندي وبوليتو في تمام الساعة',
      mainUnits: ["م قيادة", "درع 1", "سهم 1", "جنوب 1", "غرب 1", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"],
      secondaryAddableUnits: ["درع", "سهم", "جنوب", "غرب", "خفر", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية", "سير", "ميم", "سري", "صد", "حزم", "رمح", "ردع", "امن", "ساحل"],
      dynamicSections: [
          { id: 'swat', title: 'سوات | S.W.A.T', reportTitle: 'سوات | S.W.A.T  :', defaultUnits: [{ name: 'حزم 1' }, { name: 'رمح 1' }] },
          { id: 'cid', title: 'البحث الجنائي', reportTitle: 'البحث الجنائي  :', defaultUnits: [{name: 'جنائي 6'}, {name: 'جنائي 7'}, {name: 'جنائي 8'}, {name: 'جنائي 9'}, {name: 'جنائي 10'}, {name: 'جنائي 11'}, {name: 'جنائي 12'}, {name: 'جنائي 13'}] },
          { id: 'drugs', title: 'مكافحة مخدرات', reportTitle: 'مكافحة مخدرات :', defaultUnits: [{name: 'مكافحة 6'}, {name: 'مكافحة 7'}, {name: 'مكافحة 8'}, {name: 'مكافحة 9'}, {name: 'مكافحة 10'}, {name: 'مكافحة 11'}, {name: 'مكافحة 12'}, {name: 'مكافحة 13'}, {name: 'مكافحة 14'}] },
          { id: 'special', title: 'المهام والواجبات الخاصة', reportTitle: 'المهام والواجبات الخاصة :', defaultUnits: [{name: 'رعد 1'}, {name: 'رعد 2'}, {name: 'رعد 3'}, {name: 'رعد 4'}, {name: 'رعد 5'}, {name: 'رعد 6'}] },
          { id: 'air', title: 'دعم جوي', reportTitle: 'دعم جوي :', defaultUnits: [{name: 'شاهين 3'}, {name: 'شاهين 4'}, {name: 'شاهين 5'}, {name: 'شاهين 6'}] },
          { id: 'coast', title: 'دورة السواحل', reportTitle: 'دورة السواحل :', defaultUnits: [{ name: 'خفر' }, { name: 'امن' }, { name: 'ساحل 1' }, { name: 'ردع 1' }, { name: 'ردع 2' }] },
          { id: 'prison', title: 'المديرية العامة للسجون', reportTitle: 'نقل سجون :', aliases: ['نقل سجون'], defaultUnits: [{name: 'نقل سجون'}, {name: 'حماية 1'}, {name: 'حماية 2'}] },
          { id: 'traffic', title: 'شعبة المرور', reportTitle: 'المرور :', aliases: ['المرور'], defaultUnits: [{name: 'سير 1'}, {name: 'ميم 1'}, {name: 'سري 1'}, {name: 'صد 1'}] }
      ]
    },
    hp: {
      stateKey: 'highwayPatrolReportState',
      reportName: 'أمن الطرق',
      reportHeader: 'تم استلام مهام العمليات لأمن الطرق في تمام الساعة',
      mainUnits: ["م قيادة", "سيف 1", "رصد 1", "ساهر 1", "امان 1", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"],
      secondaryAddableUnits: ["سيف", "رصد", "ساهر", "امان", "خفر", "ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية", "سير", "ميم", "سري", "صد", "حزم", "رمح", "ردع", "امن", "ساحل", "خدمات"],
      dynamicSections: [
          { id: 'swat', title: 'سوات | S.W.A.T', reportTitle: 'سوات | S.W.A.T  :', defaultUnits: [{ name: 'حزم 1' }, { name: 'رمح 1' }] },
          { id: 'cid', title: 'البحث الجنائي', reportTitle: 'البحث الجنائي  :', defaultUnits: [{name: 'جنائي 6'}, {name: 'جنائي 7'}, {name: 'جنائي 8'}, {name: 'جنائي 9'}, {name: 'جنائي 10'}, {name: 'جنائي 11'}, {name: 'جنائي 12'}, {name: 'جنائي 13'}] },
          { id: 'drugs', title: 'مكافحة مخدرات', reportTitle: 'مكافحة مخدرات :', defaultUnits: [{name: 'مكافحة 6'}, {name: 'مكافحة 7'}, {name: 'مكافحة 8'}, {name: 'مكافحة 9'}, {name: 'مكافحة 10'}, {name: 'مكافحة 11'}, {name: 'مكافحة 12'}, {name: 'مكافحة 13'}, {name: 'مكافحة 14'}] },
          { id: 'special', title: 'المهام والواجبات الخاصة', reportTitle: 'المهام والواجبات الخاصة :', defaultUnits: [{name: 'شهاب 1'}, {name: 'شهاب 2'}, {name: 'شهاب 3'}, {name: 'شهاب 4'}, {name: 'شهاب 5'}, {name: 'شهاب 6'}] },
          { id: 'air', title: 'دعم جوي', reportTitle: 'دعم جوي :', defaultUnits: [{name: 'شاهين 3'}, {name: 'شاهين 4'}, {name: 'شاهين 5'}, {name: 'شاهين 6'}] },
          { id: 'coast', title: 'دورة السواحل', reportTitle: 'دورة السواحل :', defaultUnits: [{ name: 'خفر' }, { name: 'امن' }, { name: 'ساحل 1' }, { name: 'ردع 1' }, { name: 'ردع 2' }] },
          {
            id: 'road_services',
            title: 'خدمات الطرق',
            reportTitle: 'خدمات الطرق :',
            defaultUnits: [
              { name: 'مسؤول نقاط التحكم' },
              { name: '_H_قسم مسؤول تحكم' },
              { name: 'مسؤول تحكم 1' },
              { name: '_H_قسم تحكم 1' },
              { name: 'تحكم 10' },
              { name: '_H_قسم تحكم 2' },
              { name: 'تحكم 20' },
              { name: '_H_قسم تحكم 3' },
              { name: 'تحكم 30' },
              { name: '_H_قسم تحكم 4' },
              { name: 'تحكم 40' },
              { name: '_H_قسم تحكم 5' },
              { name: 'تحكم 50' },
              { name: '_H_قسم تحكم 6' },
              { name: 'تحكم 60' },
              { name: '_H_قسم تحكم 7' },
              { name: 'تحكم 70' },
            ],
            expandableGroups: [
              { prefix: 'مسؤول تحكم ', range: [2, 7] },
              { prefix: 'تحكم ', range: [11, 15] },
              { prefix: 'تحكم ', range: [21, 25] },
              { prefix: 'تحكم ', range: [31, 35] },
              { prefix: 'تحكم ', range: [41, 45] },
              { prefix: 'تحكم ', range: [51, 55] },
              { prefix: 'تحكم ', range: [61, 65] },
              { prefix: 'تحكم ', range: [71, 75] },
            ]
          },
          { id: 'prison', title: 'المديرية العامة للسجون', reportTitle: 'نقل سجون :', aliases: ['نقل سجون'], defaultUnits: [{name: 'نقل سجون'}, {name: 'حماية 1'}, {name: 'حماية 2'}] },
          { id: 'traffic', title: 'شعبة المرور', reportTitle: 'المرور :', aliases: ['المرور'], defaultUnits: [{name: 'سير 1'}, {name: 'ميم 1'}, {name: 'سري 1'}, {name: 'صد 1'}] }
      ]
    }
  };

// --- GLOBAL STATE ---
let activeApp = 'ps'; // 'ps' or 'hp'
let seq = 1;

// --- CORE FUNCTIONS ---
function fillTime(prefix: string) {
  for (const id of ["startHour", "endHour"]) {
    const sel = document.getElementById(`${prefix}-${id}`) as HTMLSelectElement;
    sel.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      const o = document.createElement("option");
      o.value = o.text = String(i).padStart(2, "0");
      sel.appendChild(o);
    }
  }
  for (const id of ["startMin", "endMin"]) {
    const sel = document.getElementById(`${prefix}-${id}`) as HTMLSelectElement;
    sel.innerHTML = "";
    for (let m = 0; m < 60; m++) {
      const o = document.createElement("option");
      o.value = o.text = String(m).padStart(2, "0");
      sel.appendChild(o);
    }
  }
}

function makeLetterSelect(): HTMLSelectElement {
  const s = document.createElement("select");
  s.className = 'code-part';
  ["P", "G", "E", "R", "H", "A", "S", "C", "M", "F"].forEach((v) => {
    const o = document.createElement("option");
    o.value = v;
    o.text = v;
    s.appendChild(o);
  });
  return s;
}
function makeNumInput(): HTMLInputElement {
  const i = document.createElement("input");
  i.type = "text";
  i.className = "num code-part";
  i.maxLength = 3;
  i.placeholder = "001";
  i.addEventListener("input", () => {
    i.value = i.value.replace(/\D/g, "").slice(0, 3);
  });
  return i;
}
function makeNameInput(v: string): HTMLInputElement {
  const i = document.createElement("input");
  i.type = "text";
  i.className = "name";
  i.value = v || "";
  return i;
}

function unitRow(name: string, container: HTMLElement, isShared = false, groupId: number): HTMLDivElement {
  const row = document.createElement("div");
  row.className = "unit-row" + (isShared ? " shared" : "");
  row.dataset.role = isShared ? "shared" : "base";
  row.dataset.group = String(groupId);

  const right = document.createElement("div");
  right.className = "right-part";
  const up = document.createElement("button"); up.textContent = "↑"; up.className = "btn ghost icon";
  const down = document.createElement("button"); down.textContent = "↓"; down.className = "btn ghost icon";
  right.append(up, down);

  const center = document.createElement("div");
  center.className = "center-part";
  const nameInp = makeNameInput(name);
  if (name) {
      nameInp.readOnly = true;
      nameInp.classList.add('readonly');
  }

  let commandNumSelect: HTMLSelectElement = null;
  if (name === 'م قيادة') {
    commandNumSelect = document.createElement("select");
    commandNumSelect.className = 'command-num-select';
    for (let i = 1; i <= 12; i++) {
        const o = document.createElement("option");
        o.value = String(i);
        o.text = String(i);
        commandNumSelect.appendChild(o);
    }
    commandNumSelect.addEventListener('change', saveState);
  }

  const sep = document.createElement("span"); sep.textContent = " | ";
  const letter = makeLetterSelect();
  const hy = document.createElement("span"); hy.textContent = "-";
  const num = makeNumInput();
  hy.classList.add("code-part");

  letter.addEventListener("change", updateVisualStates);
  num.addEventListener("input", updateVisualStates);
  nameInp.addEventListener('input', saveState);
  letter.addEventListener('change', saveState);
  num.addEventListener('input', saveState);

  const logoutIndicator = document.createElement("span");
  logoutIndicator.className = "logout-indicator";
  logoutIndicator.textContent = "🔴";
  logoutIndicator.style.cssText = "display: none; margin-left: 8px;";

  // FIX: Explicitly type `centerElements` as `HTMLElement[]` to allow different element types.
  const centerElements: HTMLElement[] = [nameInp];
  if (commandNumSelect) {
    centerElements.push(commandNumSelect);
  }
  centerElements.push(sep, letter, hy, num, logoutIndicator);
  center.append(...centerElements);

  const left = document.createElement("div");
  left.className = "left-part";

  if (!isShared) {
    if (name === 'م قيادة') {
        const addAnotherMQiada = document.createElement("button");
        addAnotherMQiada.textContent = "اضافة م قيادة";
        addAnotherMQiada.className = "btn ghost";
        addAnotherMQiada.onclick = () => {
            const newRow = unitRow('م قيادة', container, false, seq++);
            row.after(newRow);
            updateVisualStates();
            saveState();
        };
        left.append(addAnotherMQiada);
    } else {
        const unitsWithoutSharedButton = ["ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"];
        const baseNameForSharedCheck = name.replace(/\s\d+$/, '').trim();

        if (!unitsWithoutSharedButton.includes(baseNameForSharedCheck)) {
            const addShared = document.createElement("button");
            addShared.textContent = "مشتركة";
            addShared.className = "btn ghost";
            addShared.onclick = () => {
              const after = lastShared(String(groupId), container) || row;
              after.after(unitRow(`م ${nameInp.value.trim()}`, container, true, groupId));
              updateVisualStates();
              saveState();
            };
            left.append(addShared);
        }
    }

    const secondaryAddableUnits = configs[activeApp].secondaryAddableUnits;
    let baseName: string = null;
    for(const unit of secondaryAddableUnits) {
        if(name.startsWith(unit)) {
            baseName = unit;
            break;
        }
    }

    if (baseName) {
      const addSecondary = document.createElement("button");
      addSecondary.textContent = `+ ${baseName}`;
      addSecondary.className = "btn ghost";
      addSecondary.onclick = () => {
        const currentNameInput = row.querySelector('.name') as HTMLInputElement;

        if (currentNameInput.value.trim() === baseName) {
          currentNameInput.value = `${baseName} 1`;
        }

        const existingNums = new Set<number>();
        container.querySelectorAll('.unit-row').forEach(r => {
            const name = (r.querySelector('.name') as HTMLInputElement)?.value.trim();
            if (name && name.startsWith(baseName)) {
                const numMatch = name.match(/\d+$/);
                if (numMatch) {
                    const parsedNum = parseInt(numMatch[0], 10);
                    if (!isNaN(parsedNum)) {
                        existingNums.add(parsedNum);
                    }
                }
            }
        });

        let newNum = 1;
        while (existingNums.has(newNum)) {
          newNum++;
        }

        const newName = `${baseName} ${newNum}`;
        const newRow = unitRow(newName, container, false, seq++);

        insertUnitRowInOrder(container, newRow);

        updateVisualStates();
        saveState();
      };
      left.append(addSecondary);
    }
  }

  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "تسجيل خروج";
  logoutBtn.className = "btn ghost";
  logoutBtn.onclick = () => {
      const l = letter.value;
      const n = num.value.trim();
      if (!l || !n) return;
      const logoutList = document.getElementById(`${activeApp}-logoutList`);
      const alreadyLoggedOut = Array.from(logoutList.querySelectorAll(".unit-row")).some(r => (r.querySelector("select.code-part") as HTMLSelectElement).value === l && (r.querySelector(".num") as HTMLInputElement).value.trim() === n);
      if (!alreadyLoggedOut) {
          const newRow = logoutRow();
          (newRow.querySelector("select.code-part") as HTMLSelectElement).value = l;
          (newRow.querySelector(".num") as HTMLInputElement).value = n;
          logoutList.appendChild(newRow);
          updateVisualStates();
          saveState();
      }
  };
  left.append(logoutBtn);

  const nonDeletableUnits = [
    'مسؤول نقاط التحكم', 'مسؤول تحكم 1', 'تحكم 10', 'تحكم 20', 'تحكم 30',
    'تحكم 40', 'تحكم 50', 'تحكم 60', 'تحكم 70'
  ];

  const containerIdSuffix = container.id.split('-').pop();
  const specialStaticSections = ['s1List', 's2List', 'b1List', 'b2List'];
  const isSpecialStaticSection = specialStaticSections.includes(containerIdSuffix);
  const isMainListContainer = containerIdSuffix === 'mainList';
  const protectedMainUnits = configs[activeApp].mainUnits;

  let shouldShowDelete = true;
  if (nonDeletableUnits.includes(name)) {
      shouldShowDelete = false;
  } else if (isSpecialStaticSection && !isShared) {
      shouldShowDelete = false;
  } else if (isMainListContainer && protectedMainUnits.includes(name)) {
      if (name === 'م قيادة') {
          // Correctly check if other 'م قيادة' rows already exist by checking the .value property.
          const existingMQiadaRows = Array.from(container.querySelectorAll('.unit-row .name')).filter(
              (input: HTMLInputElement) => input.value.trim() === 'م قيادة'
          );
          // If other 'م قيادة' rows exist, this one is an addition and should be deletable.
          // If none exist, this is the first (main) one and should NOT be deletable.
          if (existingMQiadaRows.length > 0) {
              shouldShowDelete = true;
          } else {
              shouldShowDelete = false;
          }
      } else {
          // Other protected main units are not deletable.
          shouldShowDelete = false;
      }
  }

  if (shouldShowDelete) {
      const del = document.createElement("button");
      del.textContent = "❌";
      del.className = "btn ghost icon";
      del.onclick = () => {
        // Get the name at the time of click to avoid stale closure data.
        const currentName = (row.querySelector('.name') as HTMLInputElement).value.trim();
        const nameMatch = currentName.match(/^(.*?) (\d+)$/);

        // Perform deletion.
        // Special handling for 'م قيادة' which are added as standalone base units.
        if (currentName === 'م قيادة') {
            row.remove();
        } else if ((row as HTMLElement).dataset.role === 'base') {
            // A base unit; remove it and all its associated shared units.
            blockOf((row as HTMLElement).dataset.group, container).forEach((item) => item.remove());
        } else {
            // A shared unit; just remove the single row.
            row.remove();
        }
        
        // If the deleted unit was a numbered one (e.g., "درع 2").
        if (nameMatch) {
            const baseName = nameMatch[1];
            const specialUnitsForAutoRename = ["ضابط خفر", "الشرطة العسكرية", "الشؤون الادارية"];
            
            if (specialUnitsForAutoRename.includes(baseName)) {
                // Find all remaining non-shared units of the same family within the same container.
                const familyRows = Array.from(container.querySelectorAll('.unit-row')).filter(r => {
                    const nameInput = r.querySelector('.name') as HTMLInputElement;
                    if (!nameInput) return false;
                    
                    // Exclude shared units.
                    if ((r as HTMLElement).dataset.role === 'shared') return false;
                    
                    // Check if the unit name belongs to the same family (e.g., starts with "درع").
                    return nameInput.value.trim().startsWith(baseName);
                });

                // If exactly one unit from that family remains...
                if (familyRows.length === 1) {
                    const lastUnitNameInput = familyRows[0].querySelector('.name') as HTMLInputElement;
                    const lastUnitName = lastUnitNameInput.value.trim();
                    
                    // ...and that unit is specifically the "#1" version...
                    if (lastUnitName === `${baseName} 1`) {
                        // ...revert its name back to the base name (e.g., "درع 1" -> "درع").
                        lastUnitNameInput.value = baseName;
                    }
                }
            }
        }

        updateVisualStates();
        saveState();
      };
      left.append(del);
  }

  up.onclick = () => {
    if (row.previousElementSibling) row.parentNode.insertBefore(row, row.previousElementSibling);
    updateVisualStates();
    saveState();
  };
  down.onclick = () => {
    if (row.nextElementSibling) row.parentNode.insertBefore(row.nextElementSibling, row);
    updateVisualStates();
    saveState();
  };

  row.append(right, center, left);

  if (name.startsWith('_H_')) {
      nameInp.value = name.substring(3);
      nameInp.readOnly = true;
      row.classList.add('unit-header-row');
      right.style.display = 'none';
      sep.style.display = 'none';
      letter.style.display = 'none';
      hy.style.display = 'none';
      num.style.display = 'none';
      left.style.display = 'none';
      if(commandNumSelect) commandNumSelect.style.display = 'none';
  }

  return row;
}

function addBase(c: HTMLElement, name = "") {
  c.appendChild(unitRow(name, c, false, seq++));
}

function lastShared(id: string, c: HTMLElement): Element {
  return Array.from(c.querySelectorAll(".unit-row")).filter((r : HTMLElement) => r.dataset.group === id && r.dataset.role === "shared").pop();
}

function blockOf(id: string, c: HTMLElement): Element[] {
  const rows = Array.from(c.querySelectorAll(".unit-row"));
  const block = [];
  let on = false;
  for (const r of rows) {
    if ((r as HTMLElement).dataset.group === id) {
      on = true;
      block.push(r);
    } else if (on) {
      break;
    }
  }
  return block;
}

function logoutRow(): HTMLDivElement {
  const row = document.createElement("div");
  row.className = "unit-row";
  const letter = makeLetterSelect();
  const hy = document.createElement("span"); hy.textContent = "-";
  const num = makeNumInput();
  const del = document.createElement("button");
  del.textContent = "❌";
  del.className = "btn ghost icon";
  del.onclick = () => {
    row.remove();
    updateVisualStates();
    saveState();
  };
  letter.addEventListener("change", updateVisualStates);
  num.addEventListener("input", updateVisualStates);
  letter.addEventListener('change', saveState);
  num.addEventListener('input', saveState);
  row.append(letter, hy, num, del);
  return row;
}

function clearAllLists() {
  const prefix = activeApp;
  document.getElementById(`${prefix}-mainList`).innerHTML = '';
  document.getElementById(`${prefix}-dynamicSectionsContainer`).innerHTML = '';
  document.getElementById(`${prefix}-addSectionSelect`).querySelectorAll('option').forEach(opt => opt.disabled = false);
  document.getElementById(`${prefix}-s1List`).innerHTML = '';
  document.getElementById(`${prefix}-s2List`).innerHTML = '';
  document.getElementById(`${prefix}-b1List`).innerHTML = '';
  const b2List = document.getElementById(`${prefix}-b2List`);
  if (b2List) b2List.innerHTML = '';
  document.getElementById(`${prefix}-logoutList`).innerHTML = '';
  seq = 1;
}

function showParseMessage(msg: string, type = 'success') {
    const el = document.getElementById(`${activeApp}-parseMsg`) as HTMLElement;
    el.textContent = msg;
    let color = '#60a5fa'; // default to success blue
    if (type === 'error') {
        color = '#f87171'; // red
    } else if (type === 'info') {
        color = '#fb923c'; // orange
    }
    el.style.color = color;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 3000);
}

function normalizeName(name: string): string {
  if (!name) return '';
  let normalized = name.trim().replace(/:$/, '').trim();
  if (normalized.match(/^(م\s*)?(قياده|قيادة)$/)) normalized = 'م قيادة';
  if (normalized.startsWith('حنوب')) normalized = normalized.replace(/^حنوب/, 'جنوب');
  if (normalized.includes('ضابط خفر') || normalized.includes('ضابط حفر')) {
      const numMatch = normalized.match(/\d+$/);
      normalized = numMatch ? `ضابط خفر ${numMatch[0]}` : 'ضابط خفر';
  }
  if (normalized.startsWith('حفر')) normalized = normalized.replace(/^حفر/, 'خفر');
  if (['شرطه عسكريه', 'شرطه العسكرية', 'شرطة عسكرية'].includes(normalized)) normalized = 'الشرطة العسكرية';
  const shoonVariations = ['الشوؤن الاداريه', 'الشؤون الاداريه', 'شؤون ادارية', 'شؤون الاداريه', 'الشؤون ادارية'];
  if (shoonVariations.includes(normalized)) normalized = 'الشؤون الادارية';
  const singleUnitNames = ['درع', 'سيف', 'سهم', 'جنوب', 'غرب', 'خفر', 'ضابط خفر', 'حزم', 'رمح', 'ردع', 'امن', 'ساحل', 'دورية الشمال', 'دورية الجنوب', 'دورية الشرق', 'دورية الغرب', 'نقطة تفتيش', 'مرور سري', 'امن طرق', 'تحقيق', 'مهمات', 'اسناد', 'رصد', 'ساهر', 'امان'];
  if (singleUnitNames.includes(normalized)) normalized = `${normalized} 1`;
  return normalized.replace(/\s\s+/g, ' ');
}

function processLogoutSection(sectionText: string, container: HTMLElement) {
  if (!sectionText || !container) return;
  const lines = sectionText.split('\n');
  const codeRegex = /([A-Z])\s*-?\s*(\d{1,3})/i;
  lines.forEach(line => {
      const match = line.match(codeRegex);
      if (match) {
          const row = logoutRow();
          container.appendChild(row);
          (row.querySelector('select.code-part') as HTMLSelectElement).value = match[1].toUpperCase();
          (row.querySelector('.num') as HTMLInputElement).value = match[2];
      }
  });
}

function buildUnitAndPrefixMaps(prefix: string) {
    const unitMap = new Map<string, string>();
    const prefixMap = new Map<string, string>();
    const config = configs[prefix];

    // 1. Main units and their addable prefixes
    config.mainUnits.forEach(unitName => {
        unitMap.set(normalizeName(unitName), `${prefix}-mainList`);
    });
    config.secondaryAddableUnits.forEach(unitPrefix => {
        if (!prefixMap.has(unitPrefix)) {
            prefixMap.set(unitPrefix, `${prefix}-mainList`);
        }
    });

    // 2. Dynamic sections
    config.dynamicSections.forEach(section => {
        const containerId = `${prefix}-${section.id}List`;
        section.defaultUnits.forEach(unit => {
            const normalized = normalizeName(unit.name);
            if (!normalized.startsWith('_H_')) {
                unitMap.set(normalized, containerId);
                const baseNameRegex = /^(.*?)\s*\d*$/;
                const match = normalized.match(baseNameRegex);
                if (match && match[1]) {
                    const baseName = match[1].trim();
                    if (baseName) {
                        prefixMap.set(baseName, containerId);
                    }
                }
            }
        });
    });

    // 3. Static sections (handle them last to check for prefix ambiguity)
    const staticSections: any[] = [];
    if (prefix === 'ps') {
        staticSections.push({ id: 's1List', prefix: 'سين ', range: [10, 19] });
        staticSections.push({ id: 's2List', prefix: 'سين ', range: [20, 29] });
        staticSections.push({ id: 'b1List', prefix: 'باء ', range: [10, 19] });
        staticSections.push({ id: 'b2List', prefix: 'باء ', range: [20, 29] });
    } else { // hp
        staticSections.push({ id: 's1List', prefix: 'جيم ', range: [10, 19] });
        staticSections.push({ id: 's2List', prefix: 'لام ', range: [10, 19] });
        staticSections.push({ id: 'b1List', prefix: 'دال ', range: [10, 19] });
    }
    const prefixCounts: { [key: string]: number } = {};
    staticSections.forEach(s => {
        const p = s.prefix.trim();
        prefixCounts[p] = (prefixCounts[p] || 0) + 1;
    });

    staticSections.forEach(section => {
        for (let i = section.range[0]; i <= section.range[1]; i++) {
            unitMap.set(normalizeName(`${section.prefix}${i}`), `${prefix}-${section.id}`);
        }
        const p = section.prefix.trim();
        if (prefixCounts[p] === 1) {
            prefixMap.set(p, `${prefix}-${section.id}`);
        }
    });

    return { unitMap, prefixMap };
}

function parseAndFillReportLegacy() {
  const prefix = activeApp;
  const text = (document.getElementById(`${prefix}-pasteArea`) as HTMLTextAreaElement).value;
  if (!text.trim()) {
      showParseMessage('الرجاء لصق تقرير أولاً.', 'error');
      return;
  }

  clearAllLists();
  populateDefaultUnits(true);

  const timeRegex = /الساعة\s*(\d{1,2}):(\d{2})\s*([صم])\s*(?:الى|إلى)\s*الساعة\s*(\d{1,2}):(\d{2})\s*([صم])/i;
  const timeMatch = text.match(timeRegex);
  if (timeMatch) {
      (document.getElementById(`${prefix}-startHour`) as HTMLSelectElement).value = String(parseInt(timeMatch[1], 10)).padStart(2, '0');
      (document.getElementById(`${prefix}-startMin`) as HTMLSelectElement).value = timeMatch[2];
      (document.getElementById(`${prefix}-startPeriod`) as HTMLSelectElement).value = timeMatch[3].toLowerCase();
      (document.getElementById(`${prefix}-endHour`) as HTMLSelectElement).value = String(parseInt(timeMatch[4], 10)).padStart(2, '0');
      (document.getElementById(`${prefix}-endMin`) as HTMLSelectElement).value = timeMatch[5];
      (document.getElementById(`${prefix}-endPeriod`) as HTMLSelectElement).value = timeMatch[6].toLowerCase();
  }

  const { unitMap, prefixMap } = buildUnitAndPrefixMaps(prefix);

  let reportText = text;

  const logoutRegex = /ت?سجيل\s*خروج[^:]*:/i;
  const logoutMatch = reportText.match(logoutRegex);
  if (logoutMatch) {
      const logoutContent = reportText.substring(logoutMatch.index + logoutMatch[0].length);
      processLogoutSection(logoutContent, document.getElementById(`${prefix}-logoutList`));
      reportText = reportText.substring(0, logoutMatch.index);
  }

  const parseLine = (line: string) => {
      const lineRegex = /^(.*?)\s*(?:(?:([A-Z])\s*-?\s*(\d{1,3}))|(?:(\d{1,3})\s*-?\s*([A-Z])))\s*[|I:]*$/i;
      const match = line.trim().match(lineRegex);
      if (!match) return null;

      let rawName = match[1].replace(/[|I:]/g, ' ').trim();
      let commandNum = null;

      const mqiadaMatch = rawName.match(/^(م\s*(?:قياده|قيادة))\s*(\d{1,2})$/i);
      if (mqiadaMatch) {
          rawName = mqiadaMatch[1];
          commandNum = mqiadaMatch[2];
      }
      
      const name = normalizeName(rawName);
      
      let letter, num;
      if (match[2] && match[3]) { letter = match[2].toUpperCase(); num = match[3]; }
      else if (match[4] && match[5]) { letter = match[5].toUpperCase(); num = match[4]; }
      else return null;
      if (parseInt(num, 10) === 0) return null;
      if (name) {
          num = String(num).padStart(3, '0');
          const result: { name: string, letter: string, num: string, commandNum?: string } = { name, letter, num };
          if (commandNum) {
              result.commandNum = commandNum;
          }
          return result;
      }
      return null;
  };

  const allUnits = reportText.split('\n')
      .filter(line => !line.includes('الــعمــلـيـات') && !line.includes('نــائـــب الــعمــلـيـات'))
      .map(parseLine)
      .filter(Boolean);

  const baseUnits = [];
  const sharedUnits = [];
  allUnits.forEach(unit => {
      if (unit.name.startsWith('م ') && unit.name !== 'م قيادة') {
          sharedUnits.push(unit);
      } else {
          baseUnits.push(unit);
      }
  });

  // PASS 1: Base Units
  baseUnits.forEach(unit => {
      if (!unit) return;
      const normalizedName = normalizeName(unit.name);
      let containerId = unitMap.get(normalizedName);

      if (!containerId) {
          const sortedPrefixes = Array.from(prefixMap.keys()).sort((a, b) => b.length - a.length);
          const bestMatch = sortedPrefixes.find(p => normalizedName.startsWith(p));

          if (bestMatch) {
              containerId = prefixMap.get(bestMatch);
          }
      }

      if (!containerId) {
          containerId = `${prefix}-mainList`;
      }

      const dynamicConfig = configs[prefix].dynamicSections.find(s => `${prefix}-${s.id}List` === containerId);
      if (dynamicConfig && !document.getElementById(`${prefix}-${dynamicConfig.id}Section`)) {
          createDynamicSection(dynamicConfig.id, dynamicConfig.title, dynamicConfig.defaultUnits, null, false);
      }

      const container = document.getElementById(containerId);
      if (container) {
          let targetRow : Element = null;
          // For 'م قيادة', we always add a new row because a report can have multiple.
          // The cleanup logic at the end will remove the empty default one.
          if (normalizedName !== 'م قيادة') {
            targetRow = Array.from(container.querySelectorAll('.unit-row')).find(row => {
                const nameInput = row.querySelector('.name') as HTMLInputElement;
                return nameInput && normalizeName(nameInput.value) === normalizedName;
            });
          }

          if (targetRow) {
              (targetRow.querySelector('select.code-part') as HTMLSelectElement).value = unit.letter;
              (targetRow.querySelector('input.num') as HTMLInputElement).value = unit.num;
              const commandSelect = targetRow.querySelector('.command-num-select') as HTMLSelectElement;
              if (commandSelect && (unit as any).commandNum) {
                  commandSelect.value = (unit as any).commandNum;
              }
          } else {
              const newRow = unitRow(unit.name, container, false, seq++);
              (newRow.querySelector('select.code-part') as HTMLSelectElement).value = unit.letter;
              (newRow.querySelector('input.num') as HTMLInputElement).value = unit.num;
              const commandSelect = newRow.querySelector('.command-num-select') as HTMLSelectElement;
              if (commandSelect && (unit as any).commandNum) {
                  commandSelect.value = (unit as any).commandNum;
              }
              insertUnitRowInOrder(container, newRow);
          }
      }
  });

  // PASS 2: Shared Units
  sharedUnits.forEach(unit => {
      const parentName = normalizeName(unit.name.substring(2));
      let parentRow: Element = null;

      const allListSelectors = `#${prefix}-mainList, #${prefix}-dynamicSectionsContainer .units, #${prefix}-s1List, #${prefix}-s2List, #${prefix}-b1List, #${prefix}-b2List`;
      const allLists = document.querySelectorAll(allListSelectors);

      for (const list of Array.from(allLists)) {
          parentRow = Array.from(list.querySelectorAll('.unit-row[data-role="base"]')).find(row => {
              const nameInput = row.querySelector('.name') as HTMLInputElement;
              return nameInput && normalizeName(nameInput.value) === parentName;
          });
          if (parentRow) break;
      }

      if (parentRow) {
          const parentContainer = parentRow.closest('.units') as HTMLElement;
          const parentGroupId = (parentRow as HTMLElement).dataset.group;
          const lastSharedRow = lastShared(parentGroupId, parentContainer) || parentRow;

          const newSharedRow = unitRow(unit.name, parentContainer, true, parseInt(parentGroupId, 10));
          (newSharedRow.querySelector('select.code-part') as HTMLSelectElement).value = unit.letter;
          (newSharedRow.querySelector('input.num') as HTMLInputElement).value = unit.num;

          lastSharedRow.after(newSharedRow);
      } else {
           console.warn(`Could not find parent unit "${parentName}" for shared unit "${unit.name}". Adding to main list.`);
           const container = document.getElementById(`${prefix}-mainList`);
           if(container){
              const newRow = unitRow(unit.name, container, false, seq++);
              (newRow.querySelector('select.code-part') as HTMLSelectElement).value = unit.letter;
              (newRow.querySelector('input.num') as HTMLInputElement).value = unit.num;
              insertUnitRowInOrder(container, newRow);
           }
      }
  });

  // Clean up the default 'م قيادة' row if new numbered ones were parsed
  const mainList = document.getElementById(`${prefix}-mainList`);
  if (mainList) {
      const mQiadaRows = Array.from(mainList.querySelectorAll('.unit-row')).filter(row => {
          const nameInput = row.querySelector('.name') as HTMLInputElement;
          return nameInput && nameInput.value.trim().startsWith('م قيادة');
      });

      // If we have more than one 'م قيادة' row (meaning we added numbered ones)
      if (mQiadaRows.length > 1) {
          // Find the original, default row which has an empty code
          const defaultMQiadaRow = mQiadaRows.find(row => {
              const nameInput = row.querySelector('.name') as HTMLInputElement;
              const numInput = row.querySelector('.num') as HTMLInputElement;
              return nameInput && nameInput.value.trim() === 'م قيادة' && numInput && !numInput.value.trim();
          });

          if (defaultMQiadaRow) {
              defaultMQiadaRow.remove();
          }
      }
  }

  updateVisualStates();
  saveState();
  showParseMessage('✅ تم تحديث النموذج بنجاح.');
}

function updateAddMissingButtons() {
  const appPrefix = activeApp;
  const staticSections: any[] = [];
  if (appPrefix === 'ps') {
      staticSections.push(
          { id: 's1List', prefix: 'سين ', range: [10, 19], isRange: true },
          { id: 's2List', prefix: 'سين ', range: [20, 29], isRange: true },
          { id: 'b1List', prefix: 'باء ', range: [10, 19], isRange: true },
          { id: 'b2List', prefix: 'باء ', range: [20, 29], isRange: true }
      );
  } else if (appPrefix === 'hp') {
       staticSections.push(
          { id: 's1List', prefix: 'جيم ', range: [10, 19], isRange: true },
          { id: 's2List', prefix: 'لام ', range: [10, 19], isRange: true },
          { id: 'b1List', prefix: 'دال ', range: [10, 19], isRange: true }
      );
  }

  const sections = staticSections;

  sections.forEach(section => {
      const container = document.getElementById(`${appPrefix}-${section.id}`);
      if (!container) return;
      const actionsDiv = container.nextElementSibling as HTMLElement;
      if (!actionsDiv?.classList.contains('actions')) return;

      // Clear previous buttons
      actionsDiv.querySelectorAll('.add-missing-btn').forEach(btn => btn.remove());

      const existingNums = new Set<number>();
      container.querySelectorAll('.unit-row').forEach(row => {
          const name = (row.querySelector('.name') as HTMLInputElement)?.value.trim();
          if (name?.startsWith(section.prefix)) {
              const num = parseInt(name.replace(section.prefix, ''), 10);
              if (!isNaN(num)) existingNums.add(num);
          }
      });

      const numbersToProcess: number[] = section.isRange
          ? Array.from({length: section.range[1] - section.range[0] + 1}, (_, i) => section.range[0] + i)
          : section.range;

      numbersToProcess.reverse().forEach(i => {
          if (!existingNums.has(i)) {
              const newName = `${section.prefix}${i}`;
              const addBtn = document.createElement('button');
              addBtn.textContent = `+ ${newName}`;
              addBtn.className = 'btn ghost add-missing-btn';
              addBtn.style.marginLeft = '8px';
              addBtn.onclick = () => {
                  const newRow = unitRow(newName, container, false, seq++);
                  insertUnitRowInOrder(container, newRow);
                  updateVisualStates();
                  saveState();
              };
              actionsDiv.prepend(addBtn);
          }
      });
  });
}

function updateConfigurableSectionButtons(sectionId: string, defaultUnitNames: string[]) {
    const list = document.getElementById(`${activeApp}-${sectionId}List`);
    if (!list) return;
    const actionsDiv = list.nextElementSibling as HTMLElement;
    if (!actionsDiv?.classList.contains('actions')) return;

    actionsDiv.querySelectorAll('.add-missing-btn').forEach(btn => btn.remove());

    const existingUnits = new Set(Array.from(list.querySelectorAll('.name')).map((input : HTMLInputElement) => input.value.trim()));
    const missingUnits = defaultUnitNames.filter(unit => !existingUnits.has(unit) && !unit.startsWith('_H_'));

    missingUnits.reverse().forEach(unitName => {
        const addBtn = document.createElement('button');
        addBtn.textContent = `+ ${unitName}`;
        addBtn.className = 'btn ghost add-missing-btn';
        addBtn.style.marginLeft = '8px';
        addBtn.onclick = () => {
            const newRow = unitRow(unitName, list, false, seq++);
            insertUnitRowInOrder(list, newRow, defaultUnitNames);
            updateVisualStates();
            saveState();
        };
        actionsDiv.prepend(addBtn);
    });
}

function updateExpandableSectionButtons() {
  const appPrefix = activeApp;
  const config = configs[appPrefix];

  document.querySelectorAll('.inline-actions-bar').forEach(el => el.remove());

  const roadServicesConfig = config.dynamicSections.find(s => s.id === 'road_services');
  if (!roadServicesConfig || !roadServicesConfig.expandableGroups) return;

  const container = document.getElementById(`${appPrefix}-${roadServicesConfig.id}List`);
  if (!container) return;

  const mainActionsDiv = container.nextElementSibling as HTMLElement;
  const allUnitRowsInContainer = Array.from(container.querySelectorAll('.unit-row'));

  let anyGroupManaged = false;

  roadServicesConfig.expandableGroups.forEach((group, groupIndex) => {
      const baseNumber = group.range[0] - 1;
      const allPossibleNumbersInGroup = [baseNumber, ...Array.from({length: group.range[1] - group.range[0] + 1}, (_, i) => group.range[0] + i)];

      const existingRowsForGroup = allUnitRowsInContainer.filter(row => {
          const name = (row.querySelector('.name') as HTMLInputElement)?.value.trim();
          if (!name || !name.startsWith(group.prefix)) return false;
          const num = parseInt(name.replace(group.prefix, ''), 10);
          return !isNaN(num) && allPossibleNumbersInGroup.includes(num);
      });

      const existingNumbersForGroup = new Set(existingRowsForGroup.map(row => parseInt((row.querySelector('.name') as HTMLInputElement).value.trim().replace(group.prefix, ''), 10)));
      const missingNumbers = allPossibleNumbersInGroup.filter(num => !existingNumbersForGroup.has(num)).sort((a, b) => a - b);

      let insertionPoint: Element = null;

      if (existingRowsForGroup.length > 0) {
          insertionPoint = existingRowsForGroup.sort((a, b) => {
              const numA = parseInt((a.querySelector('.name') as HTMLInputElement).value.replace(group.prefix, ''));
              const numB = parseInt((b.querySelector('.name') as HTMLInputElement).value.replace(group.prefix, ''));
              return numA - numB;
          }).pop();

          let cursor = insertionPoint.nextElementSibling as HTMLElement;
          while (cursor) {
              if (!cursor.classList.contains('unit-row') || cursor.classList.contains('unit-header-row')) break;
              const cursorName = (cursor.querySelector('.name') as HTMLInputElement)?.value.trim();
              if (cursorName) {
                  const isAnotherGroupUnit = roadServicesConfig.expandableGroups.some(g => {
                      if (!cursorName.startsWith(g.prefix)) return false;
                      const numPart = cursorName.replace(g.prefix, '').trim();
                      return numPart && !isNaN(parseInt(numPart, 10));
                  });
                  if (isAnotherGroupUnit) break;
              }
              insertionPoint = cursor;
              cursor = insertionPoint.nextElementSibling as HTMLElement;
          }
      } else {
          const headerDef = roadServicesConfig.defaultUnits.filter(u => u.name.startsWith('_H_'))[groupIndex];
          if (headerDef) {
              const headerText = headerDef.name.substring(3);
              insertionPoint = allUnitRowsInContainer.find(row => row.classList.contains('unit-header-row') && (row.querySelector('.name') as HTMLInputElement)?.value.trim() === headerText);
          }
      }

      if (!insertionPoint) return;

      anyGroupManaged = true;

      const actionsBar = document.createElement('div');
      actionsBar.className = 'actions inline-actions-bar';
      actionsBar.style.paddingRight = '50px';
      actionsBar.style.justifyContent = 'flex-start';

      missingNumbers.forEach(num => {
          const unitNameToAdd = `${group.prefix}${num}`;
          const addUnitBtn = document.createElement('button');
          addUnitBtn.className = 'btn ghost';
          addUnitBtn.textContent = `+ ${unitNameToAdd}`;
          addUnitBtn.onclick = () => {
              const newRow = unitRow(unitNameToAdd, container, false, seq++);
              insertUnitRowInOrder(container, newRow);
              updateVisualStates();
              saveState();
          };
          actionsBar.appendChild(addUnitBtn);
      });

      const addDirectiveBtn = document.createElement('button');
      addDirectiveBtn.className = 'btn ghost';
      addDirectiveBtn.textContent = '+ إضافة توجيه';
      addDirectiveBtn.onclick = () => {
          const newRow = unitRow('', container, false, seq++);
          actionsBar.before(newRow);
          updateVisualStates();
          saveState();
      };
      actionsBar.appendChild(addDirectiveBtn);

      if (actionsBar.hasChildNodes()) {
          (insertionPoint as HTMLElement).after(actionsBar);
      }
  });

  if (anyGroupManaged && mainActionsDiv && mainActionsDiv.classList.contains('actions')) {
      mainActionsDiv.style.display = 'none';
  } else if (mainActionsDiv && mainActionsDiv.classList.contains('actions')) {
      mainActionsDiv.style.display = 'flex';
  }
}

function insertUnitRowInOrder(container: HTMLElement, newRow: HTMLElement, predefinedOrder: string[] = []) {
    const unitName = (newRow.querySelector('.name') as HTMLInputElement).value.trim();

    // --- Start: Special Handling for 'م قيادة' to group them together ---
    if (unitName === 'م قيادة') {
        const mqiadaRows = Array.from(container.querySelectorAll('.unit-row')).filter(row => {
            const nameInput = row.querySelector('.name') as HTMLInputElement;
            return nameInput && nameInput.value.trim() === 'م قيادة';
        });

        if (mqiadaRows.length > 0) {
            const lastMQiadaRow = mqiadaRows[mqiadaRows.length - 1];
            if (lastMQiadaRow.nextSibling) {
                container.insertBefore(newRow, lastMQiadaRow.nextSibling);
            } else {
                container.appendChild(newRow);
            }
            return;
        }
    }
    // --- End: Special Handling ---


    // --- Start: Smart Numeric Sorting Logic ---
    const getUnitInfo = (name: string) => {
        const match = name.match(/^(.*?)\s*(\d+)$/);
        if (match) {
            return { baseName: match[1].trim(), number: parseInt(match[2], 10) };
        }
        return null;
    };

    const newUnitInfo = getUnitInfo(unitName);

    if (newUnitInfo) {
        const family: { element: HTMLElement; number: number }[] = [];
        container.querySelectorAll('.unit-row[data-role="base"]:not(.unit-header-row)').forEach(row => {
            const existingUnitName = (row.querySelector('.name') as HTMLInputElement)?.value.trim();
            const existingUnitInfo = getUnitInfo(existingUnitName);
            if (existingUnitInfo && existingUnitInfo.baseName === newUnitInfo.baseName) {
                family.push({ element: row as HTMLElement, number: existingUnitInfo.number });
            }
        });

        if (family.length > 0) {
            family.sort((a, b) => a.number - b.number);

            const successor = family.find(member => member.number > newUnitInfo.number);
            if (successor) {
                container.insertBefore(newRow, successor.element);
                return;
            } else {
                const lastFamilyMember = family[family.length - 1].element;
                const lastMemberGroupId = lastFamilyMember.dataset.group;
                const lastMemberBlock = blockOf(lastMemberGroupId, container);
                const insertionPoint = lastMemberBlock.length > 0 ? lastMemberBlock[lastMemberBlock.length - 1] : lastFamilyMember;
                
                // Using .after() is cleaner and safer than manipulating nextSibling.
                insertionPoint.after(newRow);
                return;
            }
        }
    }
    // --- End: Smart Numeric Sorting Logic ---

    // --- Start: Predefined/Custom Order Logic ---
    if (predefinedOrder && predefinedOrder.length > 0) {
        const unitIndex = predefinedOrder.indexOf(unitName);
        if (unitIndex > -1) {
            // Find the next unit from the predefined list that is already in the container
            let successorElement: Element = null;
            for (let i = unitIndex + 1; i < predefinedOrder.length; i++) {
                const successorName = predefinedOrder[i];
                const found = Array.from(container.children).find(child =>
                    child.classList.contains('unit-row') &&
                    (child.querySelector('.name') as HTMLInputElement)?.value.trim() === successorName
                );
                if (found) {
                    successorElement = found;
                    break;
                }
            }

            if (successorElement) {
                container.insertBefore(newRow, successorElement);
                return;
            }
        }
    }
    // --- End: Predefined/Custom Order Logic ---

    // Default fallback: append to the end
    container.appendChild(newRow);
}

function updateMainListAddButtons() {
    const prefix = activeApp;
    const config = configs[prefix];
    const mainList = document.getElementById(`${prefix}-mainList`);
    const actionsContainer = document.getElementById(`${prefix}-mainList-actions`);

    if (!mainList || !actionsContainer) return;

    actionsContainer.innerHTML = '';

    const existingUnitNames = new Set(Array.from(mainList.querySelectorAll('.unit-row .name')).map((input: HTMLInputElement) => input.value.trim()));
    const defaultUnits = config.mainUnits;

    const missingDefaultUnits = defaultUnits.filter(unitName => {
        // If an exact match is found, it's not missing.
        if (existingUnitNames.has(unitName)) {
            return false;
        }

        // For default units that are also expandable base names (e.g., "الشؤون الادارية"),
        // check if a numbered version exists (e.g., "الشؤون الادارية 1").
        // This prevents the "add" button from reappearing after the base unit is numbered.
        const isExpandableBase = config.secondaryAddableUnits.includes(unitName);
        if (isExpandableBase) {
            // Check if any existing unit starts with this name followed by a space (to match "Unit 1" but not "Unit-Old").
            const existsWithNumber = Array.from(existingUnitNames).some(existingName => existingName.startsWith(unitName + ' '));
            if (existsWithNumber) {
                return false; // It's not missing, it just has a number now.
            }
        }

        // If no exact match and no numbered version found (if applicable), it's missing.
        return true;
    });

    missingDefaultUnits.forEach(missingUnitName => {
        const btn = document.createElement('button');
        btn.className = 'btn ghost';
        btn.textContent = `+ إضافة ${missingUnitName}`;
        btn.onclick = () => {
            const newRow = unitRow(missingUnitName, mainList, false, seq++);
            insertUnitRowInOrder(mainList, newRow, defaultUnits);
            updateVisualStates();
            saveState();
        };
        actionsContainer.appendChild(btn);
    });
}

function updateVisualStates() {
  const prefix = activeApp;
  const logoutCodes = new Set<string>();
  document.getElementById(`${prefix}-logoutList`).querySelectorAll(".unit-row").forEach(r => {
      let n = (r.querySelector(".num") as HTMLInputElement).value.replace(/\D/g, "").slice(0, 3);
      if (n) logoutCodes.add(`${(r.querySelector("select.code-part") as HTMLSelectElement).value}-${n.padStart(3, "0")}`);
  });

  const codeCounts: { [key: string]: number } = {};
  const dynamicSectionsConfig = configs[prefix].dynamicSections;
  let baseListIds = ['mainList', 's1List', 's2List', 'b1List'];
  if (prefix === 'ps') {
      baseListIds.push('b2List');
  }
  const listIds = [...baseListIds, ...dynamicSectionsConfig.map(c => `${c.id}List`)];
  const selector = listIds.map(id => `#${prefix}-${id} .unit-row`).join(', ');
  const allRows = document.querySelectorAll(selector);

  allRows.forEach(row => {
      let num = (row.querySelector(".num") as HTMLInputElement)?.value.replace(/\D/g, "").slice(0, 3);
      if (num) {
          const code = `${(row.querySelector("select.code-part") as HTMLSelectElement).value}-${num.padStart(3, "0")}`;
          codeCounts[code] = (codeCounts[code] || 0) + 1;
      }
  });

  allRows.forEach(row => {
      const letterEl = row.querySelector("select.code-part") as HTMLSelectElement;
      const numEl = row.querySelector("input.num") as HTMLInputElement;
      if (!letterEl || !numEl) return;

      let num = numEl.value.replace(/\D/g, "").slice(0, 3);
      let code = num ? `${letterEl.value}-${num.padStart(3, '0')}` : "";
      const isLoggedOut = code && logoutCodes.has(code);
      const isDuplicate = code && codeCounts[code] > 1;

      const codeParts = row.querySelectorAll('.code-part');
      codeParts.forEach((p: HTMLElement) => { p.style.color = ""; p.style.textDecoration = ""; });
      (row.querySelector('.logout-indicator') as HTMLElement).style.display = 'none';

      if (isLoggedOut) {
          (row.querySelector('.logout-indicator') as HTMLElement).style.display = 'inline';
          codeParts.forEach((p: HTMLElement) => { p.style.color = "#f87171"; p.style.textDecoration = "line-through"; });
      } else if (isDuplicate) {
           codeParts.forEach((p: HTMLElement) => { p.style.color = "#fb923c"; });
      } else if (code) {
           codeParts.forEach((p: HTMLElement) => { p.style.color = "#22c55e"; });
      }
  });

  updateAddMissingButtons();
  updateExpandableSectionButtons();
  dynamicSectionsConfig.forEach(config => {
      if (document.getElementById(`${prefix}-${config.id}List`) && !config.expandableGroups) {
          updateConfigurableSectionButtons(config.id, config.defaultUnits.map(u => u.name));
      }
  });
  updateMainListAddButtons();
}

function formatReport(): string {
  const prefix = activeApp;
  const config = configs[prefix];
  const reportTypeEl = document.getElementById(`${prefix}-reportType`) as HTMLSelectElement;
  const reportType = reportTypeEl.value;

  const start = `${(document.getElementById(`${prefix}-startHour`) as HTMLSelectElement).value}:${(document.getElementById(`${prefix}-startMin`) as HTMLSelectElement).value} ${(document.getElementById(`${prefix}-startPeriod`) as HTMLSelectElement).value}`;
  const end = `${(document.getElementById(`${prefix}-endHour`) as HTMLSelectElement).value}:${(document.getElementById(`${prefix}-endMin`) as HTMLSelectElement).value} ${(document.getElementById(`${prefix}-endPeriod`) as HTMLSelectElement).value}`;

  const logoutCodes = new Set<string>();
  document.getElementById(`${prefix}-logoutList`).querySelectorAll(".unit-row").forEach(r => {
      const n = (r.querySelector(".num") as HTMLInputElement).value.trim();
      if (n) logoutCodes.add(`${(r.querySelector("select.code-part") as HTMLSelectElement).value}-${n.padStart(3, '0')}`);
  });

  const getListContent = (listEl: HTMLElement): string => {
      if (!listEl) return "";
      return Array.from(listEl.children).map(unit => {
          if (unit.classList.contains('actions') || unit.classList.contains('inline-actions-bar')) return null;

          const nameInp = unit.querySelector(".name") as HTMLInputElement;
          if (!nameInp) return null;

          const name = nameInp.value.trim();
          const numVal = (unit.querySelector(".num") as HTMLInputElement)?.value.trim() || '';

          if (unit.classList.contains('unit-header-row')) {
              return name ? name : null;
          }

          if (name && numVal) {
              const code = `${(unit.querySelector("select.code-part") as HTMLSelectElement).value}-${numVal.padStart(3, '0')}`;
              if (logoutCodes.has(code)) return null;
              
              let displayName = name;
              if (name === 'م قيادة') {
                  const commandNumSelect = unit.querySelector(".command-num-select") as HTMLSelectElement;
                  if (commandNumSelect) {
                      displayName = `${name} ${commandNumSelect.value}`;
                  }
              }
              return `${displayName} | ${code}`;
          }

          return null;
      }).filter(Boolean).join('\n\n');
  };

  let report = `${config.reportHeader} ${start} الى ${end}\n\n`;
  if (reportType === 'تقرير') {
    report += `تقرير\n\n\n`;
  } else {
    const reportNum = reportType.split(' ')[1] || '1';
    report += `تـحـديـث ${reportNum}\n\n\n`;
  }

  report += `الــعمــلـيـات | @منشن العمليات\n\n`;
  report += `نــائـــب الــعمــلـيـات | @ منشن النائب العمليات`;

  const separator = '—————————————————';
  const reportParts: string[] = [];

  const mainListContent = getListContent(document.getElementById(`${prefix}-mainList`));
  if (mainListContent) {
      reportParts.push(mainListContent);
  }

  const activeDynamicSections = config.dynamicSections
      .filter(c => document.getElementById(`${prefix}-${c.id}Section`));

  const dynamicSectionsOutput = activeDynamicSections.map(c => {
      const content = getListContent(document.getElementById(`${prefix}-${c.id}List`));
      const cleanTitle = c.reportTitle.replace(/\*/g, '').trim();
      return content ? `${cleanTitle}\n\n${content}` : null;
  }).filter(Boolean);

  if (dynamicSectionsOutput.length > 0) {
      reportParts.push(`الدورات المفعلة :\n\n${dynamicSectionsOutput.join('\n\n')}`);
  } else {
      reportParts.push(`الدورات المفعلة :\n\nلا يوجد`);
  }

  const s1Title = prefix === 'hp' ? "جـــيم :" : "ســـين 1 :";
  const s2Title = prefix === 'hp' ? "لام :" : "ســـين 2 :";
  const b1Title = prefix === 'hp' ? "دال :" : "باء 1 :";
  const staticSections = [{ title: s1Title, listId: "s1List" }, { title: s2Title, listId: "s2List" }, { title: b1Title, listId: "b1List" }];
  if (prefix === 'ps') {
      staticSections.push({ title: "بـاء 2 :", listId: "b2List" });
  }

  staticSections.forEach(sec => {
      const content = getListContent(document.getElementById(`${prefix}-${sec.listId}`));
      if (content) {
          reportParts.push(`${sec.title}\n\n${content}`);
      } else {
          reportParts.push(`${sec.title}\n\nلا يوجد`);
      }
  });

  let logoutContent = Array.from(document.getElementById(`${prefix}-logoutList`).children).map(unit => {
      const n = (unit.querySelector(".num") as HTMLInputElement).value.trim();
      return n ? `${(unit.querySelector("select.code-part") as HTMLSelectElement).value}-${n.padStart(3, '0')}` : null;
  }).filter(Boolean).join('\n');

  if (logoutContent) {
      reportParts.push(`تسجيل خروج :\n\n${logoutContent}`);
  } else {
      reportParts.push(`تسجيل خروج :\n\nلا يوجد`);
  }

  const filteredParts = reportParts.filter(Boolean);
  if (filteredParts.length > 0) {
      report += `\n\n${separator}\n\n${filteredParts.join(`\n\n${separator}\n\n`)}`;
  }

  const earlyReasonValue = (document.querySelector(`input[name='${prefix}-earlyReason']:checked`) as HTMLInputElement).value;
  if (earlyReasonValue !== 'none') {
      let reasonText = '';
      switch (earlyReasonValue) {
          case 'restart':
              reasonText = 'ريستارت';
              break;
          case 'realignment':
              reasonText = 'اعادة اصطفاف';
              break;
          case 'other':
              reasonText = (document.getElementById(`${prefix}-otherReasonText`) as HTMLInputElement).value.trim();
              break;
      }
      if (reasonText) {
          report += `\n\nسبب نزول التقرير مبكرا : ${reasonText}`;
      }
  }

  return report.trim();
}

function saveState() {
  const prefix = activeApp;
  const state = {
    reportType: (document.getElementById(`${prefix}-reportType`) as HTMLSelectElement).value,
    startHour: (document.getElementById(`${prefix}-startHour`) as HTMLSelectElement).value, startMin: (document.getElementById(`${prefix}-startMin`) as HTMLSelectElement).value, startPeriod: (document.getElementById(`${prefix}-startPeriod`) as HTMLSelectElement).value,
    endHour: (document.getElementById(`${prefix}-endHour`) as HTMLSelectElement).value, endMin: (document.getElementById(`${prefix}-endMin`) as HTMLSelectElement).value, endPeriod: (document.getElementById(`${prefix}-endPeriod`) as HTMLSelectElement).value,
    earlyReason: (document.querySelector(`input[name='${prefix}-earlyReason']:checked`) as HTMLInputElement).value,
    otherReasonText: (document.getElementById(`${prefix}-otherReasonText`) as HTMLInputElement).value,
    lists: {}, activeDynamicSections: []
  };
  const dynamicSectionsConfig = configs[prefix].dynamicSections;
  let listIds = ['mainList', 's1List', 's2List', 'b1List', 'logoutList'];
  if (prefix === 'ps') {
    listIds.push('b2List');
  }

  dynamicSectionsConfig.forEach(c => {
      if(document.getElementById(`${prefix}-${c.id}List`)) {
          listIds.push(`${c.id}List`);
          state.activeDynamicSections.push(c.id);
      }
  });

  listIds.forEach(id => {
    const container = document.getElementById(`${prefix}-${id}`);
    if (container) {
      state.lists[id] = Array.from(container.querySelectorAll(".unit-row")).map(row => ({
        name: (row.querySelector(".name") as HTMLInputElement)?.value,
        letter: (row.querySelector("select.code-part") as HTMLSelectElement)?.value,
        num: (row.querySelector(".num") as HTMLInputElement)?.value,
        commandNum: (row.querySelector(".command-num-select") as HTMLSelectElement)?.value,
        isShared: (row as HTMLElement).dataset.role === 'shared',
        group: (row as HTMLElement).dataset.group
      }));
    }
  });
  localStorage.setItem(configs[prefix].stateKey, JSON.stringify(state));
}

function loadState() {
  const prefix = activeApp;
  const stateJSON = localStorage.getItem(configs[prefix].stateKey);
  if (!stateJSON) {
      populateDefaultUnits();
      updateFooterText();
      return;
  }
  const state = JSON.parse(stateJSON);

  const reportTypeEl = document.getElementById(`${prefix}-reportType`) as HTMLSelectElement;
  if (prefix === 'ps') {
    reportTypeEl.value = state.reportType || 'تحديث 1';
  } else {
    // Highway patrol only has one option, so no need to set it from state
    reportTypeEl.value = 'تقرير';
  }

  (document.getElementById(`${prefix}-startHour`) as HTMLSelectElement).value = state.startHour || '01';
  (document.getElementById(`${prefix}-startMin`) as HTMLSelectElement).value = state.startMin || '00';
  (document.getElementById(`${prefix}-startPeriod`) as HTMLSelectElement).value = state.startPeriod || 'ص';
  (document.getElementById(`${prefix}-endHour`) as HTMLSelectElement).value = state.endHour || '01';
  (document.getElementById(`${prefix}-endMin`) as HTMLSelectElement).value = state.endMin || '00';
  (document.getElementById(`${prefix}-endPeriod`) as HTMLSelectElement).value = state.endPeriod || 'ص';

  if (state.earlyReason) {
      const earlyReasonRadio = document.getElementById(`${prefix}-reason${state.earlyReason.charAt(0).toUpperCase() + state.earlyReason.slice(1)}`) as HTMLInputElement;
      if (earlyReasonRadio) earlyReasonRadio.checked = true;
  }

  const otherReasonInput = document.getElementById(`${prefix}-otherReasonText`) as HTMLInputElement;
  otherReasonInput.value = state.otherReasonText || '';
  otherReasonInput.style.display = state.earlyReason === 'other' ? 'block' : 'none';

  if(state.activeDynamicSections) {
      state.activeDynamicSections.forEach((id: string) => {
          const config = configs[prefix].dynamicSections.find(c => c.id === id);
          if(config) createDynamicSection(id, config.title, config.defaultUnits, null, false);
      });
  }

  if (state.lists) {
      for (const listId in state.lists) {
          const container = document.getElementById(`${prefix}-${listId}`);
          if (container) {
              container.innerHTML = '';
              state.lists[listId].forEach(unitData => {
                  let row = listId === 'logoutList' ? logoutRow() : unitRow(unitData.name, container, unitData.isShared, parseInt(unitData.group, 10));
                  if (row.querySelector("select.code-part") && unitData.letter) (row.querySelector("select.code-part") as HTMLSelectElement).value = unitData.letter;
                  if (row.querySelector(".num") && unitData.num) (row.querySelector(".num") as HTMLInputElement).value = unitData.num;
                  if (row.querySelector(".command-num-select") && unitData.commandNum) (row.querySelector(".command-num-select") as HTMLSelectElement).value = unitData.commandNum;
                  container.appendChild(row);
              });
          }
      }
  }
  if (!state.lists?.mainList || state.lists.mainList.length === 0) {
      populateDefaultUnits();
  }
  updateVisualStates();
  updateFooterText();
}

function updateFooterText() {
  const copyrightEl = document.getElementById('copyright-line');
  if (activeApp === 'ps') {
      copyrightEl.textContent = '© 2025 جميع الحقوق محفوظة لإدارة قطاع الأمن العام بسيرفر بوليتو.';
  } else { // hp
      copyrightEl.textContent = '© 2025 جميع الحقوق محفوظة لإدارة قطاع أمن الطرق بسيرفر بوليتو.';
  }
}

function populateDefaultUnits(populateSubsections = true) {
  const prefix = activeApp;
  const config = configs[prefix];
  const mainList = document.getElementById(`${prefix}-mainList`);
  if(mainList.children.length === 0) config.mainUnits.forEach(name => addBase(mainList, name));

  if (populateSubsections) {
      const s1List = document.getElementById(`${prefix}-s1List`);
      if (s1List.children.length === 0) {
          const s1Prefix = prefix === 'hp' ? 'جيم ' : 'سين ';
          for (let i = 10; i <= 19; i++) addBase(s1List, `${s1Prefix}${i}`);
      }
      const s2List = document.getElementById(`${prefix}-s2List`);
      if (s2List.children.length === 0) {
          if (prefix === 'hp') {
              for (let i = 10; i <= 19; i++) addBase(s2List, `لام ${i}`);
          } else {
              for (let i = 20; i <= 29; i++) addBase(s2List, `سين ${i}`);
          }
      }
      const b1List = document.getElementById(`${prefix}-b1List`);
      if (b1List.children.length === 0) {
          const b1Prefix = prefix === 'hp' ? 'دال ' : 'باء ';
          for (let i = 10; i <= 19; i++) addBase(b1List, `${b1Prefix}${i}`);
      }
      const b2List = document.getElementById(`${prefix}-b2List`);
      if (b2List && b2List.children.length === 0) {
          for (let i = 20; i <= 29; i++) addBase(b2List, `باء ${i}`);
      }
  }

  updateVisualStates();
  saveState();
}

function createDynamicSection(id: string, title: string, defaultUnits: {name: string}[], afterElement = null, shouldSave = true) {
  const prefix = activeApp;
  const container = document.getElementById(`${prefix}-dynamicSectionsContainer`);
  if (document.getElementById(`${prefix}-${id}Section`)) return;

  const sectionWrapper = document.createElement('div');
  sectionWrapper.id = `${prefix}-${id}Section`;
  const header = document.createElement('h3');
  header.style.justifyContent = 'space-between';
  const titleSpan = document.createElement('span');
  titleSpan.textContent = title;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.className = 'btn ghost icon';
  removeBtn.onclick = () => {
      sectionWrapper.remove();
      (document.querySelector(`#${prefix}-addSectionSelect option[value="${id}"]`) as HTMLOptionElement).disabled = false;
      updateVisualStates();
      saveState();
  };
  header.append(titleSpan, removeBtn);

  const list = document.createElement('div');
  list.id = `${prefix}-${id}List`;
  list.className = 'units';
  defaultUnits.forEach(unit => addBase(list, unit.name));

  const actions = document.createElement('div');
  actions.className = 'actions';
  const addBtn = document.createElement('button');
  addBtn.textContent = '+ إضافة توجيه';
  addBtn.className = 'btn ghost';
  addBtn.onclick = () => addBase(list);
  actions.appendChild(addBtn);

  const divider = document.createElement('hr');
  divider.className = 'divider';
  sectionWrapper.append(header, list, actions, divider);

  const desiredOrder = configs[prefix].dynamicSections.map(c => c.id);
  const newSectionIndex = desiredOrder.indexOf(id);
  const insertBeforeElement = Array.from(container.children).find(el => desiredOrder.indexOf(el.id.replace(`${prefix}-`, '').replace('Section', '')) > newSectionIndex);

  container.insertBefore(sectionWrapper, insertBeforeElement);
  (document.querySelector(`#${prefix}-addSectionSelect option[value="${id}"]`) as HTMLOptionElement).disabled = true;

  if (shouldSave) {
    updateVisualStates();
    saveState();
  }
}

function setupEventListeners(prefix: string) {
    document.getElementById(`${prefix}-addLogout`).onclick = () => document.getElementById(`${prefix}-logoutList`).appendChild(logoutRow());

    document.getElementById(`${prefix}-copyBtn`).addEventListener("click", () => {
      navigator.clipboard.writeText(formatReport()).then(() => {
        const ok = document.getElementById(`${prefix}-okMsg`);
        ok.textContent = `✅ تم نسخ تقرير ${configs[activeApp].reportName}`;
        ok.style.display = "block";
        setTimeout(() => (ok.style.display = "none"), 2000);
      });
    });

    document.getElementById(`${prefix}-parseReportQuickBtn`).addEventListener('click', parseAndFillReportLegacy);

    document.getElementById(`${prefix}-clearFormBtn`).addEventListener('click', () => {
      clearAllLists();
      populateDefaultUnits();
      (document.getElementById(`${prefix}-pasteArea`) as HTMLTextAreaElement).value = '';
      saveState();
      showParseMessage('✅ تم مسح النموذج.');
    });

    document.querySelectorAll(`input[name="${prefix}-earlyReason"]`).forEach(radio => {
      radio.addEventListener('change', (e) => {
        (document.getElementById(`${prefix}-otherReasonText`) as HTMLElement).style.display = (e.target as HTMLInputElement).value === 'other' ? 'block' : 'none';
        saveState();
      });
    });
    document.getElementById(`${prefix}-otherReasonText`).addEventListener('input', saveState);

    const activeWrap = document.getElementById(`${prefix}-wrap`);
    activeWrap.querySelectorAll('select, input[type="text"]').forEach(el => {
        if(!el.classList.contains('name') && !el.classList.contains('num')) {
            el.addEventListener('change', saveState);
        }
    });

    const addSectionSelect = document.getElementById(`${prefix}-addSectionSelect`) as HTMLSelectElement;
    document.getElementById(`${prefix}-addSectionBtn`).addEventListener('click', () => {
        const selectedId = addSectionSelect.value;
        const config = configs[prefix].dynamicSections.find(c => c.id === selectedId);
        if (config) createDynamicSection(config.id, config.title, config.defaultUnits);
    });
}

function switchApp(appName: string) {
    if (appName === activeApp) return;

    saveState(); // Save the state of the current app before switching

    activeApp = appName;

    // Update body class for the fixed watermark
    document.body.classList.remove('ps-active', 'hp-active');
    document.body.classList.add(`${appName}-active`);

    // Update UI
    document.getElementById('ps-tab').classList.toggle('active', appName === 'ps');
    document.getElementById('hp-tab').classList.toggle('active', appName === 'hp');
    document.getElementById('ps-wrap').classList.toggle('active', appName === 'ps');
    document.getElementById('hp-wrap').classList.toggle('active', appName === 'hp');

    // Re-initialize the form for the new active app
    // Data is loaded via loadState(), which calls populate if needed. No need to clear.
    loadState();
}

function setupDynamicSectionUI(prefix: string) {
    const addSectionSelect = document.getElementById(`${prefix}-addSectionSelect`);
    const dynamicSectionsConfig = configs[prefix].dynamicSections;
    addSectionSelect.innerHTML = '';
    dynamicSectionsConfig.forEach(config => {
        const option = document.createElement('option');
        option.value = config.id;
        option.textContent = config.title;
        addSectionSelect.appendChild(option);
    });
}

function initApp() {
  // Setup for both apps initially
  fillTime('ps');
  fillTime('hp');
  setupEventListeners('ps');
  setupEventListeners('hp');
  setupDynamicSectionUI('ps');
  setupDynamicSectionUI('hp');

  // Set initial body class for watermark
  document.body.classList.add(`${activeApp}-active`);

  // Correctly set reportType options for HP
  const hpReportTypeSelect = document.getElementById('hp-reportType');
  hpReportTypeSelect.innerHTML = '';
  const reportOption = document.createElement('option');
  reportOption.value = 'تقرير';
  reportOption.textContent = 'تقرير';
  hpReportTypeSelect.appendChild(reportOption);

  // Tab switching logic
  document.getElementById("ps-tab").addEventListener("click", () => switchApp('ps'));
  document.getElementById("hp-tab").addEventListener("click", () => switchApp('hp'));

  // Initial load for the default app
  loadState();
}

document.addEventListener("DOMContentLoaded", initApp);