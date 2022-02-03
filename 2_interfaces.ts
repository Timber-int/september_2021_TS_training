interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        height: number,
    }
}

const rect1: Rect = {
    id: "1",
    color: "black",
    size: {
        width: 12,
        height: 30,
    }
}

const rect2: Rect = {
    id: "1223",
    size: {
        width: 12,
        height: 34,
    }
}

rect2.color = "black";
rect2.size = {width: 34, height: 43};

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=============================

interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: "123",
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//==========================

interface IClock {
    time: Date;

    setTime(data: Date): void;
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(data: Date): void {
        this.time = data;
    }
}

// ===========================

interface Styles {
    [key: string]: string;
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px"
}
