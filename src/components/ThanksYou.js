import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mx-auto">
        <h1 className="mt-2 text-4xl font-bold">
          בזכותך בעלי הרכב יכולים לטפל בבעיה
        </h1>
        <p className="text-lg mt-4">?רוצה גם לשמור על הרכב שלך</p>
        <p className="text-lg">
          הזמן עכשיו קארקוד לרכב שלך, ותהנה מממבצע בלעדי למדווחים בלבד{" "}
        </p>
        <button className="mt-4 text-lg font-bold bg-primary text-secondary-100 dark:bg-black dark:text-secondary-100 hover:text-primary dark:hover:text-slate-800 hover:bg-white dark:hover:bg-primary p-2 rounded-lg w-96">
          להזמנת קארקוד ב50% הנחה
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
