const StorageService = localStorage;

const addRecord = (table, row) => {
  const currentValue = StorageService.getItem(table) ?? '[]';
  const rows = JSON.parse(currentValue);
  rows.push(row);
  StorageService.setItem(table, JSON.stringify(rows));
};

const updateRecord = (table, key, value, newProps) => {
  const currentValue = StorageService.getItem(table) ?? '[]';
  const rows = JSON.parse(currentValue);
  const newRows = rows?.map((r) => (r[key] !== value ? r : { ...r, ...newProps }));
  StorageService.setItem(table, JSON.stringify(newRows));
};

const removeRecord = (table, key, value) => {
  const currentValue = StorageService.getItem(table) ?? '[]';
  const rows = JSON.parse(currentValue);
  const newRows = rows.filter((row) => row[key] !== value);
  StorageService.setItem(table, JSON.stringify(newRows));
};

const getRecords = (table) => {
  const rawData = StorageService.getItem(table) ?? '[]';
  return JSON.parse(rawData);
};

export default { addRecord, removeRecord, getRecords, updateRecord };
