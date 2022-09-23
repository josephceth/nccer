export type NCCERPerson = {
    NccerCardNumber: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Suffix: string;
    Email: string;
    CellPhone: string;
    AlternateId: string;
    AlernateTypeIdCode: string;
    DateofBirth: string;
    CityOfBirth: string;
    UserRoles: UserRole[];
    DateCreated: Date;
    DateModified: Date;
} | null

export type UserRole =  {
    OrganizationId: string;
    UserRoleId: number;
} 

export type OnlineVerification = {
    Certifications:           Certifications;
    CompletedTraining:        CompletedTraining;
    KnowledgeVerified:        KnowledgeVerified;
    PerformanceVerified:      PerformanceVerified;
    CompletedPVTasks:         CompletedPVTasks;
    PartialModuleCompletions: PartialModuleCompletions;
} | null

export interface Certifications {
    InstructorAssessment: any[];
    GoldCard:             any[];
    CertifiedPlus:        CertifiedPlus[];
}

export interface CertifiedPlus {
    CertificationTitle: string;
    DateCertified:      Date;
}

export interface CompletedPVTasks {
    Tasks: Task[];
}

export interface Task {
    TaskName:      string;
    TaskId:        string;
    DateCompleted: Date;
}

export interface CompletedTraining {
    Crafts:  any[];
    Levels:  any[];
    Modules: any[];
}

export interface KnowledgeVerified {
    WrittenAssessments: WrittenAssessment[];
}

export interface WrittenAssessment {
    WrittenAssessmentTitle: string;
    DateCompleted:          Date;
}

export interface PartialModuleCompletions {
    PartialModules: any[];
}

export interface PerformanceVerified {
    PerformanceVerifications: PerformanceVerification[];
}

export interface PerformanceVerification {
    PerformanceVerificationTitle: string;
    DateCompleted:                Date;
}

export interface Column {
    key: string;
    title: string;
    type: string;
    callback :Function;
}