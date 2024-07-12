import React from "react";

const ReportOptions = ({onSelectReport}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mx-auto">
        <h1 className="mt-2 text-4xl font-bold">😎 הגעת לקארקוד</h1>
        <p className="text-lg mt-4">
          תודה שבחרת לדווח לבעלי הרכב 🙏 אנחנו יודעים כמה זה חשוב להם
        </p>
        <p className="text-lg">
          הרכב שסרקת הוא סקודיה אוקטבציה בצבע לבן
        </p>
      </div>
      <div className="mt-8 flex-grow">
        <p className="text-lg mb-2">?מה לא בסדר עם הרכב</p>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => onSelectReport("openWindow")} className="report-button">🚗 חלון פתוח</button>
          <button onClick={() => onSelectReport("lightsOn")} className="report-button">💡 אורות דולקים</button>
          <button onClick={() => onSelectReport("babyInCar")} className="report-button">👶🏻 תינוק באוטו</button>
          <button onClick={() => onSelectReport("other")} className="report-button">🤔 אחר</button>
        </div>
      </div>
    </div>
  );
};

export default ReportOptions;
